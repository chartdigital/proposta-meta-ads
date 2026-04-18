const InvestmentSection = () => (
  <section className="relative z-[1] min-h-screen flex flex-col justify-center px-[10vw] py-20 max-md:px-6 max-md:py-12 max-md:min-h-0">
    <p className="text-[11px] tracking-[4px] uppercase text-primary-light mb-8 font-medium animate-fade-up max-md:mb-5 max-md:text-[10px] max-md:tracking-[3px]">
      04 — Valores
    </p>
    <h2 className="font-condensed text-[clamp(24px,5vw,64px)] font-extrabold leading-none uppercase tracking-tight mb-10 animate-fade-up max-md:text-[clamp(24px,8vw,40px)] max-md:mb-6">
      Investimento
    </h2>

    <p className="text-[clamp(15px,1.4vw,18px)] text-muted-foreground leading-relaxed max-w-[720px] mb-10 animate-fade-up max-md:text-[14px] max-md:mb-6">
      O investimento é composto pela <strong className="text-foreground">gestão mensal</strong> dos serviços de
      marketing digital e pelo{" "}
      <strong className="text-foreground">investimento em mídia pago diretamente ao Google</strong>, separado e
      sob seu controle total.
    </p>

    <div className="grid grid-cols-2 gap-5 max-w-[700px] max-md:grid-cols-1 max-md:gap-3 animate-fade-up">
      {/* Gestão */}
      <div className="bg-primary/[0.07] border border-primary rounded-lg p-8 max-md:p-5">
        <div className="font-mono text-[10px] tracking-[3px] text-primary-light uppercase mb-2">
          Prestação de Serviços
        </div>
        <div className="font-condensed text-base font-extrabold uppercase text-muted-foreground mb-5 max-md:mb-3 max-md:text-sm">
          Gestão Mensal
        </div>
        <div className="font-mono font-bold leading-none mb-2">
          <span className="text-lg text-accent align-super max-md:text-base">R$</span>
          <span className="text-[clamp(36px,5vw,52px)] text-accent max-md:text-[36px]">1.000</span>
          <span className="text-sm text-muted-foreground font-normal">/mês</span>
        </div>
        <div className="text-[13px] text-muted-foreground leading-relaxed mt-2.5 max-md:text-[12px]">
          Google Ads, Google Meu Negócio, SEO local, relatórios e suporte completo.
        </div>
      </div>

      {/* Mídia */}
      <div className="bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg p-8 max-md:p-5">
        <div className="font-mono text-[10px] tracking-[3px] text-primary-light uppercase mb-2">
          Investimento em Mídia
        </div>
        <div className="font-condensed text-base font-extrabold uppercase text-muted-foreground mb-5 max-md:mb-3 max-md:text-sm">
          Google Ads
        </div>
        <div className="font-mono font-bold leading-none mb-2">
          <span className="text-lg text-gold align-super max-md:text-base">R$</span>
          <span className="text-[clamp(36px,5vw,52px)] text-gold max-md:text-[36px]">1.000</span>
          <span className="text-sm text-muted-foreground font-normal">/mês</span>
        </div>
        <div className="text-[13px] text-muted-foreground leading-relaxed mt-2.5 max-md:text-[12px]">
          Valor sugerido para campanhas de pesquisa e remarketing no Google Ads.
        </div>
      </div>
    </div>

    <div className="bg-primary/[0.07] border-l-[3px] border-primary rounded-r px-5 py-4 text-[13px] text-muted-foreground leading-relaxed mt-7 max-w-[700px] animate-fade-up max-md:px-4 max-md:py-3 max-md:text-[12px] max-md:mt-4">
      <strong className="text-primary-light">Transparência total:</strong> Os valores de mídia são pagos
      diretamente por você ao Google — a Chart não intermedia esse valor. Você tem visibilidade e controle
      completos sobre cada real investido em tráfego.
    </div>
  </section>
);

export default InvestmentSection;
