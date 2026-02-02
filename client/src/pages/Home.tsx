import Hero from "@/components/sections/Hero";
import ProcessFlow from "@/components/sections/ProcessFlow";
import Sustainability from "@/components/sections/Sustainability";
import OutputProducts from "@/components/sections/OutputProducts";
import InvestorValue from "@/components/sections/InvestorValue";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <ProcessFlow />
      <Sustainability />
      <OutputProducts />
      <InvestorValue />
      <Footer />
    </div>
  );
}
