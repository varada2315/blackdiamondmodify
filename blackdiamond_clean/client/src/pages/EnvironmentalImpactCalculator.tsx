import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Landmark, Recycle, ShieldAlert, ArrowRight, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CalculatorCard = ({ icon: Icon, title, value, unit, subtitle }: { icon: any, title: string, value: string, unit: string, subtitle: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-card border border-white/5 p-8 rounded-2xl space-y-4 hover:border-accent/30 transition-all duration-500 group"
  >
    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-secondary group-hover:text-accent transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-heading font-bold text-white tracking-tighter">{value}</span>
        <span className="text-sm text-secondary font-medium">{unit}</span>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed pt-4 border-t border-white/5">
      {subtitle}
    </p>
  </motion.div>
);

export default function EnvironmentalImpactCalculator() {
  const [tons, setTons] = useState<number>(1000);
  const [results, setResults] = useState({
    sandSaved: 0,
    wasteDiverted: 0,
    waterSaved: 0,
    treesSaved: 0
  });

  useEffect(() => {
    const sandSaved = tons * 0.75;
    const wasteDiverted = tons;
    const waterSaved = (tons * 1.5) * 0.9;
    // Industry-accepted approximation:
    // Recycling 1 ton granite waste avoids ~90 kg CO₂
    // 1 mature tree absorbs ~21 kg CO₂ per year
    const treesSaved = Math.round(((tons * 90) / 21) || 0);
    
    setResults({
      sandSaved,
      wasteDiverted,
      waterSaved,
      treesSaved
    });
  }, [tons]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
                Environmental <br/> <span className="text-secondary italic font-light">Impact Calculator</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Translate industrial recycling operations into measurable environmental preservation metrics. 
                Quantify the impact of every ton of granite waste diverted from dumping and recycled into construction-grade material.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Input Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-card border border-white/10 p-8 rounded-2xl space-y-6 shadow-2xl">
                <div>
                  <label htmlFor="tons" className="block text-sm font-bold text-white uppercase tracking-widest mb-4">
                    Granite Waste Processed
                  </label>
                  <div className="relative">
                    <input
                      id="tons"
                      type="text"
                      inputMode="numeric"
                      value={tons === 0 ? "" : tons.toString()}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setTons(val === "" ? 0 : parseInt(val));
                      }}
                      className="w-full bg-background border border-white/10 rounded-xl px-6 py-4 text-white text-2xl font-bold focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="e.g., 1000"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-secondary font-bold text-sm tracking-widest">TONS</span>
                  </div>
                </div>

                <div className="p-4 bg-accent/5 rounded-xl border border-accent/20 flex gap-4">
                  <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Based on BlackDiamondGranites operational data and an 800+ TPH total capacity benchmark (including a 550 TPH super primary processing unit).
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-bold uppercase tracking-wider text-xs">Environmental Indicators</h3>
                <div className="space-y-3">
                  {[
                    "Reduced river sand mining",
                    "Reduced slurry dumping and groundwater contamination",
                    "Reduced dependency on virgin aggregates"
                  ].map((indicator, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-accent" />
                      {indicator}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <CalculatorCard 
                icon={Landmark}
                title="River Sand Saved"
                value={results.sandSaved.toLocaleString()}
                unit="TONS"
                subtitle="Replaces natural river sand, preserving riparian ecosystems and preventing riverbed erosion."
              />
              <CalculatorCard 
                icon={Recycle}
                title="Waste Diverted"
                value={results.wasteDiverted.toLocaleString()}
                unit="TONS"
                subtitle="Diverts industrial slurry and stone waste from dumping sites, preventing groundwater contamination."
              />
              <CalculatorCard 
                icon={Droplets}
                title="Fresh Water Saved"
                value={results.waterSaved.toLocaleString()}
                unit="KL"
                subtitle="Total fresh water intake avoided through high-efficiency closed-loop filtration and recovery."
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-accent/10 border border-accent/20 p-8 rounded-2xl flex flex-col justify-center text-center"
              >
                {/* Primary metric (top) */}
                <div className="space-y-3">
                  <div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-base text-secondary/60 font-semibold relative -top-1">
                        ≈
                      </span>
                      <span className="text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tighter">
                        {results.treesSaved.toLocaleString()}
                      </span>
                      <span className="text-base md:text-lg text-white font-bold">Trees Saved</span>
                    </div>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed mt-3 max-w-[320px] mx-auto">
                      Equivalent annual CO₂ absorption of mature trees through reduced quarrying and waste dumping.
                    </p>
                  </div>
                </div>

                {/* Secondary tier (bottom) */}
                <div className="pt-5 mt-6 border-t border-white/10">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-200/70 mx-auto mb-3">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h4 className="text-white/80 font-bold uppercase tracking-wider text-xs mb-1">Preservation Index</h4>
                  <p className="text-xs text-muted-foreground/80">
                    Significant reduction in regional water stress and illegal mining activities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20 p-8 border-t border-white/5">
            <p className="text-[11px] text-muted-foreground leading-relaxed text-center italic">
              Disclaimer: Figures are indicative estimates based on industry averages and plant recovery efficiencies. 
              Actual results may vary depending on material characteristics and operating conditions. 
              Environmental protection achieved through precision engineering.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
