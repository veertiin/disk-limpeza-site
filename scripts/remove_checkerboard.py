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


queue: deque[tuple[int, int]] = deque()
seen = bytearray(width * height)

for x in range(width):
    queue.append((x, 0))
    queue.append((x, height - 1))
for y in range(height):
    queue.append((0, y))
    queue.append((width - 1, y))

while queue:
    x, y = queue.popleft()
    index = y * width + x
    if seen[index] or not is_background(x, y):
        continue
    seen[index] = 1
    pixels[x, y] = (255, 255, 255, 0)
    if x:
        queue.append((x - 1, y))
    if x + 1 < width:
        queue.append((x + 1, y))
    if y:
        queue.append((x, y - 1))
    if y + 1 < height:
        queue.append((x, y + 1))

image.save(target, optimize=True)
print(target)
