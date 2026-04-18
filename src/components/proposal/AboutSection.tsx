import { useEffect, useRef, useState } from "react";

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, ref };
};

const AboutSection = () => {
  const money = useCountUp(700, 2000);
  const companies = useCountUp(25, 1800);
  const percent = useCountUp(100, 1600);

  return (
    <section className="relative z-[1] min-h-screen flex flex-col justify-center px-[10vw] py-20 max-md:px-6 max-md:py-12 max-md:min-h-0">
      <p className="text-[11px] tracking-[4px] uppercase text-primary-light mb-8 font-medium animate-fade-up max-md:mb-5 max-md:text-[10px] max-md:tracking-[3px]">
        01 — Quem somos
      </p>
      <h2 className="font-condensed text-[clamp(24px,5vw,64px)] font-extrabold leading-none uppercase tracking-tight mb-10 animate-fade-up max-md:text-[clamp(24px,8vw,40px)] max-md:mb-6">
        Apresentação
      </h2>

      <div className="grid grid-cols-2 gap-12 mt-4 max-md:grid-cols-1 max-md:gap-8">
        <div className="text-[clamp(15px,1.4vw,18px)] leading-relaxed text-muted-foreground animate-fade-up max-md:text-[15px]">
          <p>
            A <strong className="text-foreground font-medium">CHART</strong> é uma agência especializada em
            performance para negócios locais e empreendedores digitais que querem crescer de forma consistente.
          </p>
          <br />
      <p>
        Nossa missão é transformar visibilidade em clientes reais, através de estratégias de tráfego pago
        no <strong className="text-foreground font-medium">Google Ads</strong>, otimização de{" "}
        <strong className="text-foreground font-medium">Google Meu Negócio</strong> e{" "}
        <strong className="text-foreground font-medium">SEO local</strong>, entregando resultados mensuráveis
        para escritórios de advocacia.
      </p>
        </div>

        <div className="flex flex-col gap-6 justify-center animate-fade-up max-md:flex-row max-md:flex-wrap max-md:gap-4">
          <div ref={money.ref} className="border-l-2 border-primary pl-5 relative max-md:pl-4 max-md:flex-1 max-md:min-w-[120px]">
            <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-accent shadow-[0_0_10px_hsl(var(--primary))]" />
            <div className="font-mono text-5xl font-semibold bg-gradient-to-r from-foreground via-primary-light to-accent bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(26,92,255,0.5)] max-md:text-3xl">
              R${money.count}k+
            </div>
            <div className="text-[13px] text-muted-foreground mt-1 tracking-wider max-md:text-[11px]">
              Gerenciados em anúncios
            </div>
          </div>

          <div ref={companies.ref} className="border-l-2 border-primary pl-5 max-md:pl-4 max-md:flex-1 max-md:min-w-[80px]">
            <div className="font-mono text-[40px] font-semibold leading-none tracking-tight max-md:text-[28px]">{companies.count}+</div>
            <div className="text-[13px] text-muted-foreground mt-1 tracking-wider max-md:text-[11px]">Empresas atendidas</div>
          </div>

          <div ref={percent.ref} className="border-l-2 border-primary pl-5 max-md:pl-4 max-md:flex-1 max-md:min-w-[80px]">
            <div className="font-mono text-[40px] font-semibold leading-none tracking-tight max-md:text-[28px]">{percent.count}%</div>
            <div className="text-[13px] text-muted-foreground mt-1 tracking-wider max-md:text-[11px]">Foco em resultados reais</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
