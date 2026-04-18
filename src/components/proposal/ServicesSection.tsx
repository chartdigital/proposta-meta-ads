const services = [
  {
    tag: "📱 Meta Ads",
    title: "Gestão de Campanhas Meta",
    items: [
      "Criação e otimização de campanhas no Facebook e Instagram",
      "Segmentação avançada por público, interesse e comportamento",
      "Campanhas de topo, meio e fundo de funil",
      "Teste A/B de criativos, copies e públicos",
      "Acompanhamento e otimizações semanais",
    ],
  },
  {
    tag: "🎨 Criativos",
    title: "Produção de Criativos",
    items: [
      "Briefing estratégico alinhado ao posicionamento da marca",
      "Criativos em formato estático, carrossel e vídeo curto",
      "Copies persuasivos com foco em conversão",
      "Adaptação de formatos para Feed, Stories e Reels",
    ],
  },
  {
    tag: "⚙️ Relatórios",
    title: "Análises & Gestão",
    items: [
      "Relatórios mensais com métricas de desempenho",
      "Dashboards personalizados e acessíveis",
      "Suporte direto via WhatsApp com a equipe",
      "Reuniões mensais de alinhamento estratégico",
    ],
  },
];

const ServicesSection = () => (
  <section className="relative z-[1] min-h-screen flex flex-col justify-center px-[10vw] py-20 max-md:px-6 max-md:py-12 max-md:min-h-0">
    <p className="text-[11px] tracking-[4px] uppercase text-primary-light mb-8 font-medium animate-fade-up max-md:mb-5 max-md:text-[10px] max-md:tracking-[3px]">
      03 — O que entregamos
    </p>
    <h2 className="font-condensed text-[clamp(24px,5vw,64px)] font-extrabold leading-none uppercase tracking-tight mb-10 animate-fade-up max-md:text-[clamp(24px,8vw,40px)] max-md:mb-6">
      Serviços Inclusos
    </h2>

    <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-3">
      {services.map((s) => (
        <div
          key={s.title}
          className="bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg p-7 transition-all duration-300 hover:border-primary hover:bg-primary/[0.06] animate-fade-up max-md:p-5"
        >
          <div className="inline-flex items-center gap-2 bg-primary/[0.12] border border-primary rounded-full px-3.5 py-1.5 text-[11px] tracking-[2px] uppercase text-primary-light mb-4 font-medium max-md:text-[10px] max-md:px-3 max-md:py-1 max-md:mb-3">
            {s.tag}
          </div>
          <h3 className="font-condensed text-lg font-extrabold uppercase mb-3.5 max-md:text-base max-md:mb-2.5">{s.title}</h3>
          <ul className="flex flex-col gap-2.5 max-md:gap-2">
            {s.items.map((item) => (
              <li key={item} className="text-[13px] text-muted-foreground pl-4 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-primary-light before:text-[11px] max-md:text-[12px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="bg-gold/[0.07] border border-gold/30 rounded-md px-6 py-4 text-[13px] text-gold flex items-start gap-3 leading-relaxed mt-5 animate-fade-up max-md:px-4 max-md:py-3 max-md:text-[12px] max-md:gap-2 max-md:mt-3">
      <span>⚠️</span>
      <span>
        <strong className="text-gold">Importante:</strong> A produção de landing pages ou sites não está inclusa.
        Fornecemos sugestões detalhadas de copy e estrutura — a execução fica a cargo de Murilo Hernandes ou de um
        desenvolvedor de sua preferência.
      </span>
    </div>
  </section>
);

export default ServicesSection;
