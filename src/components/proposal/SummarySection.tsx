const SummarySection = () => (
  <section className="relative z-[1] min-h-screen flex flex-col justify-center px-[10vw] py-20 max-md:px-6 max-md:py-12 max-md:min-h-0">
    <p className="text-[11px] tracking-[4px] uppercase text-primary-light mb-8 font-medium animate-fade-up max-md:mb-5 max-md:text-[10px] max-md:tracking-[3px]">
      02 — Visão geral
    </p>
    <h2 className="font-condensed text-[clamp(24px,5vw,64px)] font-extrabold leading-none uppercase tracking-tight mb-10 animate-fade-up max-md:text-[clamp(24px,8vw,40px)] max-md:mb-6">
      Resumo
    </h2>
    <div className="border border-foreground/[0.08] border-l-4 border-l-primary bg-foreground/[0.04] rounded px-11 py-9 text-[clamp(15px,1.5vw,19px)] leading-[1.85] text-muted-foreground max-w-[860px] animate-fade-up max-md:px-5 max-md:py-5 max-md:text-[14px] max-md:leading-[1.75]">
      Nossa estratégia com a <strong className="text-foreground font-medium">Rosa Mineira</strong> é construir
      uma presença digital forte no <strong className="text-foreground font-medium">Facebook e Instagram</strong>,
      posicionando a marca como referência na <strong className="text-foreground font-medium">venda de roupas plus size no atacado</strong>,
      conectando-a a lojistas e revendedoras de todo o Brasil. Através de{" "}
      <strong className="text-foreground font-medium">Meta Ads (Facebook Ads & Instagram Ads)</strong>,
      vamos atrair compradores qualificados, fortalecer a autoridade da marca e gerar pedidos de atacado de forma consistente.
    </div>
  </section>
);

export default SummarySection;
