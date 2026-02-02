import { ShieldCheck, Droplets, Wind, Leaf, Recycle } from "lucide-react";
import sustainableStock from '@assets/stock_images/modern_sustainable_i_1715b137.jpg';

export default function Sustainability() {
  const features = [
    {
      icon: Droplets,
      title: "Zero Liquid Discharge",
      desc: "90% water reuse efficiency with advanced recycling systems."
    },
    {
      icon: ShieldCheck,
      title: "Fully Enclosed Units",
      desc: "Crushing and screening happens in sealed environments to contain noise and dust."
    },
    {
      icon: Wind,
      title: "Dust Suppression",
      desc: "Mist cannons and high-efficiency bag filters ensure clean air standards."
    },
    {
      icon: Recycle,
      title: "Value from Waste",
      desc: "Slurry is converted into value-added products, leaving zero waste."
    },
    {
      icon: Leaf,
      title: "Green Belt Zones",
      desc: "Dedicated buffer zones with vegetation to maintain ecological balance."
    }
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-24">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Environmental <br/>
              <span className="text-tertiary">Infrastructure</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The facility is engineered to prevent environmental damage through advanced pollution control systems, closed-loop water recovery, and controlled residual management that protects groundwater, eliminates slurry dumping, and safeguards aquatic ecosystems from contamination.
            </p>
            <div className="rounded-xl overflow-hidden mb-8 border border-white/10 shadow-2xl">
              <img src={sustainableStock} alt="Sustainable Industrial Facility" className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="inline-block px-4 py-2 border border-accent/20 rounded-full bg-accent/5 text-accent text-sm font-medium">
              ISO 14001 Compliant Standards
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="p-8 bg-background border border-white/5 hover:border-accent/30 transition-colors duration-300 rounded-lg group"
              >
                <feature.icon className="w-10 h-10 text-secondary mb-6 group-hover:text-tertiary transition-colors" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}

            {/* Content Enrichment */}
            <div className="md:col-span-2 mt-8 p-10 bg-white/[0.02] border border-white/5 rounded-2xl space-y-10">
              <div className="space-y-6">
                <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">Environmental Stewardship & Frameworks</h4>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h5 className="text-tertiary font-bold uppercase tracking-wider text-xs">Environmental Risk Mitigation</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The facility is engineered to prevent environmental damage by eliminating river sand mining dependency, preventing slurry dumping into waterways, and protecting groundwater through controlled residual management. Compliance with KSPCB, MoEFCC, and C&D Waste Management Rules, 2016 ensures ecosystem protection, prevents aquatic contamination, and maintains regulatory durability.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-tertiary font-bold uppercase tracking-wider text-xs">Closed-Loop Water Recovery</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our Zero Liquid Discharge system eliminates environmental contamination by treating and reusing 90% of process water. High-capacity filter presses convert slurry into controlled residuals, preventing groundwater pollution, eliminating hazardous waste ponds, and protecting aquatic ecosystems from contamination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-white/5">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h6 className="text-white font-bold text-xs uppercase">Compliance</h6>
                  <p className="text-[11px] text-muted-foreground">Full certification for C&D waste processing and mineral recycling.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <Wind className="w-5 h-5" />
                  </div>
                  <h6 className="text-white font-bold text-xs uppercase">Air Quality</h6>
                  <p className="text-[11px] text-muted-foreground">Dust suppression via automated misting and bag filter extraction.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h6 className="text-white font-bold text-xs uppercase">Ecology</h6>
                  <p className="text-[11px] text-muted-foreground">Green belt development using processed nutrient-rich mineral fines.</p>
                </div>
              </div>

              <div className="bg-tertiary/5 p-6 rounded-xl border border-tertiary/20">
                <p className="text-sm font-bold text-tertiary uppercase tracking-[0.2em] text-center">
                  Environmental Mission: Prevent ecosystem damage by eliminating river sand mining destruction, stopping slurry dumping contamination, and protecting groundwater and aquatic ecosystems through engineered waste recovery and controlled residual management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
