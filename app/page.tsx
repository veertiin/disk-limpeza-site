const whatsapp = "https://wa.me/5588996690410?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20gr%C3%A1tis%20para%20higieniza%C3%A7%C3%A3o%20de%20estofados.";

const services = [
  { icon: "▰", title: "Sofás", copy: "Limpeza profunda que devolve conforto e aparência renovada." },
  { icon: "◫", title: "Colchões", copy: "Cuidado profissional contra poeira, resíduos e odores." },
  { icon: "◒", title: "Poltronas", copy: "Higienização detalhada para preservar cada tecido." },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Disk Limpeza — início"><img src="/logo-disk-limpeza.png" alt="Disk Limpeza" /></a>
      <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#resultados">Resultados</a><a href="#contato">Contato</a></nav>
      <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Orçamento grátis</a>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow"><i /> Higienização profissional</span>
        <h1>Seu estofado limpo.<br /><em>Sua casa renovada.</em></h1>
        <p>Limpeza profunda para sofás, poltronas e colchões. Mais saúde, conforto e bem-estar para toda a família.</p>
        <div className="hero-actions"><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp <span>↗</span></a><a className="text-link" href="#servicos">Conheça os serviços ↓</a></div>
        <div className="coverage"><span>⌖</span><p><strong>Atendemos em</strong>Cruz, Preá, Jijoca e região</p></div>
      </div>
      <div className="hero-visual" aria-label="Mascote Disk Limpeza ao lado de equipamento profissional">
        <div className="spray-outline" aria-hidden="true" /><div className="trust-card"><strong>100%</strong><span>cuidado<br />profissional</span></div>
        <img src="/mascote-disk-limpeza.png" alt="Mascote da Disk Limpeza" />
      </div>
    </section>

    <section className="services" id="servicos">
      <div className="section-heading"><span className="eyebrow"><i /> Nossos serviços</span><h2>Cuidado para cada<br />tipo de estofado.</h2></div>
      <div className="service-grid">{services.map((service) => <article key={service.title} className="service-card"><span className="service-icon">{service.icon}</span><div><h3>{service.title}</h3><p>{service.copy}</p></div><a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Pedir orçamento para ${service.title}`}>↗</a></article>)}</div>
    </section>

    <section className="results" id="resultados">
      <div className="result-copy">
        <span className="eyebrow"><i /> Resultado que aparece</span>
        <h2>Não é só limpeza.<br /><em>É renovação.</em></h2>
        <p>Equipamentos profissionais e atenção aos detalhes para transformar a aparência do seu estofado — com cuidado do início ao fim.</p>
        <ul><li><b>01</b> Avaliação do tecido e das manchas</li><li><b>02</b> Limpeza profunda e extração</li><li><b>03</b> Finalização cuidadosa</li></ul>
        <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Quero renovar meu estofado ↗</a>
      </div>
      <div className="result-gallery"><img src="/post-antes-depois.png" alt="Antes e depois da limpeza de um sofá" /><img src="/post-odores.png" alt="Higienização de sofá com animal de estimação" /></div>
    </section>

    <section className="benefits"><div><strong>+ conforto</strong><span>para aproveitar sua casa</span></div><div><strong>+ cuidado</strong><span>com cada tipo de tecido</span></div><div><strong>+ bem-estar</strong><span>para toda a família</span></div></section>

    <section className="faq-section">
      <div><span className="eyebrow"><i /> Tire suas dúvidas</span><h2>Perguntas<br />frequentes.</h2></div>
      <div className="faq-list">
        <details open><summary>Quais estofados vocês limpam?<span>+</span></summary><p>Atendemos sofás, poltronas e colchões, avaliando previamente as características de cada tecido.</p></details>
        <details><summary>Em quais cidades vocês atendem?<span>+</span></summary><p>Cruz, Preá, Jijoca e cidades próximas. Fale conosco para confirmar o atendimento no seu endereço.</p></details>
        <details><summary>Como solicito um orçamento?<span>+</span></summary><p>Envie fotos do estofado pelo WhatsApp e informe sua localização. O orçamento é gratuito.</p></details>
      </div>
    </section>

    <section className="final-cta" id="contato"><div><span className="eyebrow"><i /> Orçamento grátis</span><h2>Seu estofado merece<br /><em>um cuidado especial.</em></h2></div><div className="contact-box"><p>Fale com a Disk Limpeza e agende seu atendimento.</p><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp ↗</a><span>(88) 99669-0410 &nbsp;•&nbsp; (88) 99769-6426</span></div></section>

    <footer><img src="/logo-disk-limpeza.png" alt="Disk Limpeza" /><p>Limpeza e higienização de estofados<br />Cruz, Preá, Jijoca e região</p><a href="#inicio">Voltar ao topo ↑</a></footer>
  </main>;
}
