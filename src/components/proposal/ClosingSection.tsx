const ClosingSection = () => (
  <section className="relative z-[1] min-h-screen flex flex-col items-center justify-center text-center px-[10vw] py-20 gap-6 max-md:px-6 max-md:py-14 max-md:min-h-[70vh] max-md:gap-5">
    <p className="text-[11px] tracking-[4px] uppercase text-primary-light font-medium animate-fade-up max-md:text-[10px] max-md:tracking-[3px]">
      Vamos começar?
    </p>
    <div className="relative inline-flex flex-col items-center animate-fade-up">
      <span className="text-5xl animate-rocket-float inline-block max-md:text-4xl" aria-hidden="true">
        🚀
      </span>
    </div>
    <h2 className="font-condensed text-[clamp(24px,6vw,80px)] font-extrabold uppercase tracking-tighter leading-none animate-fade-up max-md:text-[clamp(26px,9vw,48px)]">
      <span className="text-primary-light">READY</span>
      <br />
      TO GROW?
    </h2>
    <p className="text-[clamp(14px,1.5vw,18px)] text-muted-foreground max-w-[520px] leading-relaxed animate-fade-up max-md:text-[14px]">
      Estamos prontos para posicionar sua marca como referência no Facebook e Instagram. Vamos transformar
      audiência em clientes reais.
    </p>
    <a
      href="https://wa.me/5537999388448"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary text-foreground rounded px-10 py-4 font-condensed text-sm font-bold tracking-[2px] uppercase transition-all hover:bg-primary-light hover:-translate-y-0.5 mt-2 inline-block animate-fade-up max-md:w-full max-md:text-center max-md:px-6 max-md:py-3.5 max-md:text-[13px]"
    >
      Falar com a Chart
    </a>
  </section>
);

export default ClosingSection;
