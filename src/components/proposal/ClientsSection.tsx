import atelieAcai from "@/assets/clients/atelie-acai.png";
import atelieMix from "@/assets/clients/atelie-mix.png";
import brincBoom from "@/assets/clients/brinc-boom.png";
import distrifer from "@/assets/clients/distrifer.png";
import fabricaMonstros from "@/assets/clients/fabrica-monstros.png";
import fmf from "@/assets/clients/fmf.jpg";
import hbx from "@/assets/clients/hbx.png";
import lifeSenior from "@/assets/clients/life-senior.webp";
import japaoSom from "@/assets/clients/japao-som.jpg";
import llPiscinas from "@/assets/clients/ll-piscinas.png";
import lnModas from "@/assets/clients/ln-modas.jpg";
import ifBeauty from "@/assets/clients/if-beauty.png";
import mmFitness from "@/assets/clients/mm-fitness.png";
import senhorSorriso from "@/assets/clients/senhor-sorriso.png";
import skyfit from "@/assets/clients/skyfit.png";
import madeireiraSilva from "@/assets/clients/madeireira-silva.png";
import matheusMendonca from "@/assets/clients/matheus-mendonca.png";
import meloImports from "@/assets/clients/melo-imports.png";
import prediaco from "@/assets/clients/prediaco.png";
import verejaoEconomia from "@/assets/clients/verejao-economia.png";
import corpus from "@/assets/clients/corpus.png";

const clients = [
  { name: "Ateliê do Açaí", logo: atelieAcai },
  { name: "Ateliê Mix", logo: atelieMix },
  { name: "Brinc Boom", logo: brincBoom },
  { name: "Distrifer Ferro e Aço", logo: distrifer },
  { name: "Fábrica de Monstros", logo: fabricaMonstros },
  { name: "FMF Terraplanagem", logo: fmf },
  { name: "HBx Suplementos", logo: hbx },
  { name: "Life Sênior", logo: lifeSenior },
  { name: "Japão Som e Acessórios", logo: japaoSom },
  { name: "L&L Piscinas", logo: llPiscinas },
  { name: "LN Modas", logo: lnModas },
  { name: "IF Beauty", logo: ifBeauty },
  { name: "M&M Fitness", logo: mmFitness },
  { name: "Senhor Sorriso", logo: senhorSorriso },
  { name: "SkyFit Academia", logo: skyfit },
  { name: "Madeireira Silva", logo: madeireiraSilva },
  { name: "Matheus Mendonça", logo: matheusMendonca },
  { name: "Melo Imports", logo: meloImports },
  { name: "Prediaço Ferro e Aço", logo: prediaco },
  { name: "Varejão da Economia", logo: verejaoEconomia },
  { name: "Corpus Studio", logo: corpus },
];

const ClientsSection = () => (
  <section className="relative z-[1] py-20 px-[10vw] max-md:px-6 max-md:py-10">
    <p className="text-[11px] tracking-[4px] uppercase text-primary-light mb-4 font-medium max-md:text-[10px] max-md:tracking-[3px] max-md:mb-3">
      — Quem confia na Chart
    </p>
    <h2 className="font-condensed text-[clamp(24px,5vw,64px)] font-extrabold leading-none uppercase tracking-tight mb-12 max-md:text-[clamp(22px,8vw,36px)] max-md:mb-6">
      Empresas que confiam
      <br />
      na Chart
    </h2>

    <div className="overflow-hidden relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent max-md:w-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent max-md:w-10" />

      <div className="flex gap-6 animate-marquee w-max max-md:gap-3">
        {[...clients, ...clients].map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[200px] h-[120px] rounded-xl border border-foreground/[0.08] bg-foreground/[0.03] flex items-center justify-center backdrop-blur-sm max-md:w-[130px] max-md:h-[72px] max-md:rounded-lg p-4 max-md:p-2"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
