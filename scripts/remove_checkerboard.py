from collections import deque
from pathlib import Path

from PIL import Image


source = Path(__file__).parents[1] / "public" / "mascote-disk-limpeza.png"
target = Path(__file__).parents[1] / "public" / "mascote-disk-limpeza-v2.png"

image = Image.open(source).convert("RGBA")
pixels = image.load()
width, height = image.size


def is_background(x: int, y: int) -> bool:
    r, g, b, _ = pixels[x, y]
    return min(r, g, b) >= 210 and max(r, g, b) - min(r, g, b) <= 20


seen = bytearray(width * height)

for start_y in range(height):
    for start_x in range(width):
        start_index = start_y * width + start_x
        if seen[start_index] or not is_background(start_x, start_y):
            continue

        queue: deque[tuple[int, int]] = deque([(start_x, start_y)])
        component: list[tuple[int, int]] = []
        touches_edge = False

        while queue:
            x, y = queue.popleft()
            index = y * width + x
            if seen[index] or not is_background(x, y):
                continue
            seen[index] = 1
            component.append((x, y))
            touches_edge |= x == 0 or y == 0 or x == width - 1 or y == height - 1
            if x:
                queue.append((x - 1, y))
            if x + 1 < width:
                queue.append((x + 1, y))
            if y:
                queue.append((x, y - 1))
            if y + 1 < height:
                queue.append((x, y + 1))

        # Large enclosed neutral areas are checkerboard trapped between body parts
        # or inside the hose loop. Small white brand details remain untouched.
        if touches_edge or len(component) >= 900:
            for x, y in component:
                pixels[x, y] = (255, 255, 255, 0)

image.save(target, optimize=True)
print(target)
