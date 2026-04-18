const timeline = [
  {
    id: "E1",
    active: true,
    month: "Etapa 1",
    title: "Diagnóstico & Setup",
    desc: "Análise do mercado jurídico local, setup do Google Ads, otimização do Google Meu Negócio e definição das palavras-chave estratégicas.",
  },
  {
    id: "E2",
    active: true,
    month: "Etapa 2",
    title: "Primeiros Resultados",
    desc: "Campanhas ativas gerando os primeiros leads, otimizações baseadas em dados e expansão das palavras-chave.",
  },
  {
    id: "E3",
    active: false,
    month: "Etapa 3",
    title: "Otimização & Escala",
    desc: "Refinamento de campanhas, remarketing ativo, aumento do CTR e redução do custo por lead.",
  },
  {
    id: "E4",
    active: false,
    month: "Etapa 4+",
    title: "Crescimento Contínuo",
    desc: "Escala das campanhas mais rentáveis, SEO gerando resultados orgânicos e presença consolidada no Google Maps.",
  },
];

const TimelineSection = () => (
  <section className="relative z-[1] min-h-screen flex flex-col justify-center px-[10vw] py-20 max-md:px-6 max-md:py-12 max-md:min-h-0">
    <p className="text-[11px] tracking-[4px] uppercase text-primary-light mb-8 font-medium animate-fade-up max-md:mb-5 max-md:text-[10px] max-md:tracking-[3px]">
      05 — Cronograma
    </p>
    <h2 className="font-condensed text-[clamp(24px,5vw,64px)] font-extrabold leading-none uppercase tracking-tight mb-10 animate-fade-up max-md:text-[clamp(24px,8vw,40px)] max-md:mb-6">
      Etapas do Projeto
    </h2>

    <div className="flex flex-col max-w-[680px] relative animate-fade-up">
      <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary to-accent opacity-40 max-md:left-[13px]" />

      {timeline.map((item) => (
        <div key={item.id} className="flex gap-6 py-5 max-md:gap-4 max-md:py-3.5">
          <div
            className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-mono text-xs font-semibold border relative z-[1] max-md:w-7 max-md:h-7 max-md:text-[9px] ${
              item.active
                ? "bg-primary border-primary-light text-foreground shadow-[0_0_16px_rgba(26,92,255,0.5)]"
                : "bg-primary/[0.12] border-primary text-primary-light"
            }`}
          >
            {item.id}
          </div>
          <div className="pt-1.5 max-md:pt-0.5">
            <div className="text-[11px] tracking-[3px] uppercase text-primary-light mb-1.5 max-md:text-[10px] max-md:tracking-[2px] max-md:mb-1">
              {item.month}
            </div>
            <div className="font-condensed text-xl font-extrabold uppercase mb-1.5 max-md:text-base max-md:mb-1">{item.title}</div>
            <div className="text-sm text-muted-foreground leading-relaxed max-md:text-[13px]">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 max-w-[680px] animate-fade-up max-md:mt-7">
      <div className="flex items-center gap-3 px-5 py-4 rounded-lg border border-primary/20 bg-primary/[0.06] max-md:px-4 max-md:py-3">
        <span className="text-primary-light text-lg max-md:text-base">📋</span>
        <p className="text-sm text-muted-foreground max-md:text-[13px]">
          <strong className="text-foreground font-medium">Contrato mínimo de 6 meses</strong> — tempo necessário para consolidar resultados consistentes e escalar as campanhas.
        </p>
      </div>
    </div>
  </section>
);

export default TimelineSection;
