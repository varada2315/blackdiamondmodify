import { motion } from "framer-motion";
import heroImage from "@assets/wide-shot-mining-field-with-industrial-structure_1768507646411.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/15 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center opacity-80 scale-105 animate-very-slow-zoom"
          style={{ 
            backgroundImage: `url(${heroImage})` 
          }} 
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/5 to-background z-20" />
      </div>

      <div className="relative z-30 container mx-auto px-6 text-center max-w-5xl">
        <div>
          <div className="mb-4 flex justify-center">
             <div className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-tertiary font-bold backdrop-blur-sm">
                Black Diamond Granites • Environmental Infrastructure
             </div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            Granite Waste <br/> <span className="text-tertiary italic font-light">Recovery</span>
          </h1>
          <p className="text-sm md:text-base text-tertiary/60 font-medium tracking-wide max-w-2xl mx-auto mb-8 border-t border-white/5 pt-4">
            A 250 TPH granite recycling facility operating on a 6-acre site, engineered to prevent environmental damage by transforming waste into controlled, compliant construction resources while protecting groundwater and eliminating ecosystem destruction.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12">
            Engineering granite waste into high-quality construction materials while preventing river sand mining destruction, eliminating slurry dumping contamination, and protecting groundwater through closed-loop water recovery and controlled residual management that safeguards ecosystems.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm uppercase tracking-widest text-tertiary/80 font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Sustainable
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Compliant
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Scalable
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Future-Ready
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <div className="w-[1px] h-24 bg-gradient-to-b from-secondary to-transparent" />
      </div>
    </section>
  );
}
