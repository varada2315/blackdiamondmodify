import { motion } from "framer-motion";
import { 
  Truck, 
  Layers, 
  Hammer, 
  Filter, 
  Settings, 
  Droplets, 
  Activity, 
  Pipette, 
  RefreshCw, 
  PackageCheck,
  ChevronRight,
  ChevronDown,
  ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import machineStock from '@assets/stock_images/industrial_stone_cru_30a75893.jpg';

const MachineAnimation = ({ type }: { type: string }) => {
  switch (type) {
    case 'intake':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ x: [-20, 20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="flex gap-2"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-secondary/40 rounded-sm rotate-45" />
            ))}
          </motion.div>
        </div>
      );
    case 'sorting':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            animate={{ x: [-15, 15] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-2 bg-white/20 rounded-full relative"
          >
            <motion.div 
              animate={{ opacity: [0, 1, 0], x: [0, 10] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute -top-4 left-4 w-4 h-4 bg-secondary/40 rounded-sm" 
            />
          </motion.div>
        </div>
      );
    case 'crushing':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            animate={{ scaleY: [1, 0.5, 1], y: [0, 8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-8 bg-secondary/40 rounded-t-lg border-x border-white/20"
          />
          <div className="absolute bottom-4 w-14 h-2 bg-white/20 rounded-full" />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: [0, 20], x: (i - 2.5) * 6 }}
              transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1 }}
              className="absolute bottom-6 w-1.5 h-1.5 bg-secondary rounded-full"
            />
          ))}
        </div>
      );
    case 'screening':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: [-2, 2, -2], y: [-1, 1, -1] }}
            transition={{ duration: 0.05, repeat: Infinity }}
            className="w-16 h-1.5 bg-white/20 rounded-full rotate-12"
          />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 25], opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
              className="absolute top-1/2 w-1 h-1 bg-secondary/40 rounded-full"
              style={{ left: `${15 + i * 10}%` }}
            />
          ))}
        </div>
      );
    case 'washing':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 border-2 border-dashed border-accent/30 rounded-full flex items-center justify-center"
          >
             <div className="w-4 h-4 bg-accent/40 rounded-full animate-pulse" />
          </motion.div>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [0, 1.2, 0],
                x: Math.cos(i * 30) * 20,
                y: Math.sin(i * 30) * 20
              }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
              className="absolute w-1.5 h-1.5 bg-accent/50 rounded-full"
            />
          ))}
        </div>
      );
    case 'filter':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 border border-white/10 rounded-lg flex flex-col overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ x: [-40, 40] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="h-1/4 w-full bg-secondary/20 border-b border-white/5"
              />
            ))}
          </div>
          <motion.div
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute bottom-0 w-8 h-1 bg-accent/40 blur-sm"
          />
        </div>
      );
    case 'water':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="relative w-12 h-12"
          >
            <RefreshCw className="w-full h-full text-tertiary/40" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-accent/5 rounded-full blur-xl"
          />
        </div>
      );
    case 'stockpile':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.path
            d="M 10 90 L 50 10 L 90 90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-tertiary/20"
          />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.4 }}
              className="absolute top-4 w-2 h-2 bg-secondary/40 rounded-full"
            />
          ))}
          <div className="absolute bottom-4 w-16 h-12 bg-secondary/10 rounded-t-full blur-md" />
        </div>
      );
    default:
      return null;
  }
};

const steps = [
  { id: 1, title: "Granite Waste Intake – Quarry & Processing Waste", icon: Truck, desc: "Quarry & Processing Waste", animation: 'intake' },
  { id: 2, title: "Pre-Sorting", icon: Layers, desc: "Separation of large contaminants and grading", animation: 'sorting' },
  { id: 3, title: "Primary Crushing", subtitle: "(Jaw Crusher)", icon: Hammer, desc: "Size reduction for controlled material grading", animation: 'crushing' },
  { id: 4, title: "Crusher Screen", icon: Filter, desc: "Initial separation of material by size", animation: 'screening' },
  { id: 5, title: "Screening", icon: Settings, desc: "Refined crushing for specific aggregate sizes", animation: 'screening' },
  { id: 6, title: "Sand Washing", icon: Droplets, desc: "Washing removes impurities and recovers fines", animation: 'washing' },
  { id: 7, title: "Vibratin Screen", icon: Activity, desc: "Final precise sizing of aggregates and sand", animation: 'screening' },
  { id: 8, title: "Sand Washing", icon: Droplets, desc: "Additional washing phase for ultra-pure fines", animation: 'washing' },
  { id: 9, title: "Saleable Products – Aggregates & Washed Sand", icon: PackageCheck, desc: "Graded Aggregates & Washed Sand", animation: 'stockpile' },
  { id: 10, title: "Filter Press", icon: Pipette, desc: "Solid-liquid separation for waste management", animation: 'filter' },
  { id: 11, title: "Water Recycling", subtitle: "(Closed Loop)", icon: RefreshCw, desc: "Clarified water reused in washing cycle", animation: 'water' },
  { id: 12, title: "Stockpile – Segregated Inventory", icon: Layers, desc: "Segregated Product Stockpiles", animation: 'stockpile' },
];

export default function ProcessFlow() {
  return (
    <section className="py-24 bg-background relative overflow-hidden bg-grid-white">
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Environmental <span className="text-secondary">Infrastructure Process</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Engineered environmental infrastructure workflow: a fully integrated system where granite waste is converted into certified construction materials while preventing ecosystem damage through closed-loop water recovery, groundwater protection, and elimination of destructive mining practices.
            </p>
          </motion.div>
          <div className="lg:w-1/3 rounded-xl overflow-hidden border border-white/5 h-32 w-full hidden lg:block relative group bg-card/50">
            <img src={machineStock} alt="Industrial Facility" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
          </div>
        </div>

        {/* Desktop Process Flow - Exact Layout as per Image */}
        <div className="hidden lg:grid grid-cols-4 gap-y-32 gap-x-16 relative py-12">
          {steps.map((step, index) => {
            const row = Math.floor(index / 4);
            const isEvenRow = row % 2 === 0;
            const colIndex = index % 4;
            
            // Snake layout logic:
            // Row 0: 0, 1, 2, 3 (L -> R)
            // Row 1: 7, 6, 5, 4 (R -> L visually) -> But the provided UI is slightly different.
            // Let's follow the provided UI image logic:
            // Row 1: 4, 5, 6, 7 (L -> R)
            // Row 2: 8, 9, 10, 11 (L -> R)
            // Actually the image shows:
            // Step 1 -> 2 -> 3 -> 4
            //                     |
            // Step 8 <- 7 <- 6 <- 5
            // |
            // Step 9 -> 10 -> 11 -> 12
            
            let gridCol = isEvenRow ? colIndex + 1 : 4 - colIndex;
            let gridRow = row + 1;
            
            let arrowType = null;
            if (index < steps.length - 1) {
              if (colIndex < 3) {
                 arrowType = isEvenRow ? 'right' : 'left';
              } else {
                 arrowType = 'down';
              }
            }
            
            return (
              <motion.div
                key={step.id}
                className="relative group"
                style={{ 
                  gridColumn: gridCol,
                  gridRow: gridRow
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step Card */}
                  <div className="relative w-32 h-32 mb-8">
                    <div className="absolute inset-0 rounded-2xl bg-card border border-white/10 group-hover:border-accent/40 transition-all duration-500 shadow-lg group-hover:shadow-accent/5 overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-secondary/20 to-transparent" />
                    </div>

                    {/* Animation Core */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <MachineAnimation type={step.animation || ''} />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-white/10 flex items-center justify-center text-[10px] font-bold text-secondary z-20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 uppercase tracking-wider group-hover:text-tertiary transition-colors">{step.title}</h3>
                  {step.subtitle && <span className="text-[10px] text-secondary/60 uppercase tracking-widest block mb-3 font-medium">{step.subtitle}</span>}
                  
                  <div className="max-w-[180px]">
                    <p className="text-[11px] text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Animated Connectors */}
                {index < steps.length - 1 && (
                  <div className={cn(
                    "absolute pointer-events-none z-0 flex items-center justify-center",
                    arrowType === 'right' && "top-16 -right-[75%] w-full h-1",
                    arrowType === 'left' && "top-16 -left-[75%] w-full h-1",
                    arrowType === 'down' && "top-32 left-1/2 -translate-x-1/2 w-1 h-32"
                  )}>
                    <div className={cn(
                      "relative bg-white/[0.03]",
                      (arrowType === 'right' || arrowType === 'left') ? "w-32 h-[1px]" : "w-[1px] h-32"
                    )}>
                      {/* Flow Pulse */}
                      <motion.div
                        initial={{ 
                          x: arrowType === 'right' ? "-100%" : arrowType === 'left' ? "100%" : 0,
                          y: arrowType === 'down' ? "-100%" : 0
                        }}
                        animate={{ 
                          x: arrowType === 'right' ? "200%" : arrowType === 'left' ? "-200%" : 0,
                          y: arrowType === 'down' ? "200%" : 0
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className={cn(
                          "absolute bg-accent/40 shadow-[0_0_15px_hsl(var(--color-accent))]",
                          (arrowType === 'right' || arrowType === 'left') ? "h-full w-16" : "w-full h-16"
                        )}
                      />
                      
                      {/* Arrow Head */}
                      <div className={cn(
                        "absolute text-tertiary/60",
                        arrowType === 'right' && "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
                        arrowType === 'left' && "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
                        arrowType === 'down' && "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                      )}>
                        {arrowType === 'right' && <ChevronRight className="w-4 h-4" />}
                        {arrowType === 'left' && <ChevronLeft className="w-4 h-4" />}
                        {arrowType === 'down' && <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Explanatory Text */}
        <div className="mt-20 max-w-4xl mx-auto border-t border-white/5 pt-12 space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">Environmental Infrastructure Architecture & Workflow</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The environmental infrastructure system integrates crushing, screening, washing, and water recovery into a single closed-loop system. Granite waste, slurry, and rejected blocks are processed through multiple stages to produce construction-grade materials while preventing ecosystem damage through zero liquid discharge, groundwater protection, and elimination of destructive mining practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Phase I: Primary Material Processing
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Initial processing begins with the intake of raw granite waste. Rejected blocks and debris are fed into a high-capacity jaw crusher. This stage is critical for achieving primary size reduction, breaking down massive waste into manageable fragments suitable for secondary processing. The system is calibrated to handle various hardness levels typical of premium granite, ensuring consistent feed material for downstream operations while preventing environmental contamination through controlled processing that eliminates ecosystem destruction.
              </p>
            </div>
            <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Phase II: Secondary Processing & Classification
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Secondary crushing and vibrating screens further refine the material. The sand washing unit uses hydraulic classification to remove ultra-fine impurities and organic matter. This ensures that the resulting Manufactured Sand (M-Sand) and Plastering Sand (P-Sand) possess the ideal grain shape and purity required for high-strength concrete applications, meeting industry specifications for construction aggregates while preventing ecosystem damage through controlled processing and eliminating destructive waste management practices.
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              Water Recovery & Management
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                    <span className="text-tertiary font-bold text-lg">90%</span>
                <p className="text-xs text-muted-foreground">Water recovery rate through automated filtration.</p>
              </div>
              <div className="space-y-2">
                    <span className="text-tertiary font-bold text-lg">ZLD</span>
                <p className="text-xs text-muted-foreground">Zero Liquid Discharge protocol for environmental compliance.</p>
              </div>
              <div className="space-y-2">
                    <span className="text-tertiary font-bold text-lg">Continuous</span>
                <p className="text-xs text-muted-foreground">Recirculation loop minimizing external intake.</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground border-t border-white/5 pt-6">
              By recirculating process water and recovering mineral fines, the system eliminates traditional industrial waste runoff and prevents groundwater contamination. Every cubic meter of water is accounted for, significantly reducing the environmental footprint and operational costs of the facility. Advanced hydraulic classification separates particles with precision, ensuring the final product rivals virgin river sand while preventing ecosystem damage through controlled residual management, eliminating slurry dumping, and protecting aquatic ecosystems from contamination.
            </p>
          </div>

              <div className="flex items-center gap-4 text-sm text-tertiary font-mono bg-white/5 p-6 rounded-xl border border-tertiary/10">
              <div className="p-2 bg-tertiary/20 rounded-lg">
              <RefreshCw className="w-4 h-4 text-tertiary animate-spin-slow" />
            </div>
            <div>
              <span className="uppercase tracking-widest font-bold text-[10px] block mb-1">Critical Technical Note:</span>
              <p className="text-xs opacity-80 leading-relaxed">Clarified water from the washing process is treated through high-pressure settling tanks and filter press systems, then pressurized for immediate reuse within the primary washing cycle, optimizing water utilization while managing residual fines through controlled disposal.</p>
            </div>
          </div>
        </div>

        {/* Mobile View - Simplified Timeline */}
        <div className="lg:hidden relative border-l border-white/10 ml-6 space-y-16 py-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="relative pl-12 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-card border border-white/20 group-hover:bg-accent transition-colors" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-card border border-white/5 flex items-center justify-center">
                    <MachineAnimation type={step.animation || ''} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-tertiary mb-1 block">STEP {index + 1}</span>
                    <h3 className="text-lg font-bold text-white leading-tight">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
