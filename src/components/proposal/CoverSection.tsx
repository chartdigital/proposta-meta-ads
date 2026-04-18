const CoverSection = () => (
  <section
    className="relative z-[1] min-h-screen flex flex-col justify-center px-[10vw] py-20 border-b border-foreground/[0.08] max-md:px-6 max-md:py-10 max-md:min-h-0"
  >
    <p className="text-xs tracking-[3px] uppercase text-muted-foreground animate-fade-up max-md:text-[10px] max-md:tracking-[2px]">
      Agência Chart · Proposta Comercial · 04/2026
    </p>

    <h1 className="font-condensed text-[clamp(28px,7vw,120px)] font-extrabold leading-none uppercase tracking-tighter mt-5 animate-fade-up max-md:text-[clamp(32px,12vw,56px)] max-md:mt-4">
      Proposta<br />
      <span className="text-primary-light">Meta Ads</span>
    </h1>

    <p className="font-condensed text-[clamp(13px,2vw,18px)] font-bold tracking-[4px] uppercase text-muted-foreground border-l-[3px] border-primary pl-4 mt-2 animate-fade-up max-md:text-[12px] max-md:tracking-[2px] max-md:pl-3">
      Para: Murilo Hernandes
    </p>

    <div className="mt-8 inline-flex items-center gap-2.5 bg-primary-glow border border-primary rounded-full px-5 py-2.5 text-[13px] text-primary-light tracking-wider w-fit animate-fade-up max-md:mt-6 max-md:px-4 max-md:py-2 max-md:text-[11px] max-md:gap-2">
      <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse-dot" />
      Estratégia completa · Facebook & Instagram Ads
    </div>

    <div className="mt-auto flex justify-between items-end pt-12 border-t border-foreground/[0.08] flex-wrap gap-4 animate-fade-up max-md:pt-8 max-md:flex-col max-md:items-start max-md:gap-2">
      <div className="font-condensed text-[22px] font-extrabold tracking-[2px] max-md:text-lg">
        CHART<span className="text-primary-light">.</span>
      </div>
      <p className="text-xs text-muted-foreground tracking-[2px] uppercase max-md:text-[10px] max-md:tracking-[1px]">
        Divinópolis, MG
      </p>
    </div>
  </section>
);

export default CoverSection;
