import WaveBackground from "@/components/WaveBackground";
import Divider from "@/components/Divider";
import CoverSection from "@/components/proposal/CoverSection";
import AboutSection from "@/components/proposal/AboutSection";
import SummarySection from "@/components/proposal/SummarySection";
import ServicesSection from "@/components/proposal/ServicesSection";
import TimelineSection from "@/components/proposal/TimelineSection";
import InvestmentSection from "@/components/proposal/InvestmentSection";
import ClosingSection from "@/components/proposal/ClosingSection";
import ClientsSection from "@/components/proposal/ClientsSection";

const Index = () => (
  <>
    <WaveBackground />
    <CoverSection />
    <Divider />
    <AboutSection />
    <Divider />
    <SummarySection />
    <Divider />
    <ServicesSection />
    <Divider />
    <TimelineSection />
    <Divider />
    <InvestmentSection />
    <Divider />
    <ClientsSection />
    <Divider />
    <ClosingSection />
    <footer className="relative z-[1] border-t border-foreground/[0.08] px-[10vw] py-5 flex justify-between items-center text-xs text-muted-foreground tracking-wider flex-wrap gap-2 max-md:px-6 max-md:flex-col max-md:items-start max-md:gap-1 max-md:text-[10px] max-md:py-4">
      <span>© 2026 Agência Chart · Todos os direitos reservados</span>
      <span>Proposta exclusiva para Murilo Hernandes</span>
    </footer>
  </>
);

export default Index;
