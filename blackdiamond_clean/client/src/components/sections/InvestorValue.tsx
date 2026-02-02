import { TrendingUp, CheckCircle, Scaling, Globe } from "lucide-react";
import investorStock from '@assets/stock_images/investors_in_busines_92f458a9.jpg';

export default function InvestorValue() {
  const values = [
    { icon: Globe, text: "Reduced dependency on natural sand and quarrying" },
    { icon: CheckCircle, text: "Strong regulatory positioning and approval readiness" },
    { icon: Scaling, text: "Scalable operations on large land parcel" },
    { icon: TrendingUp, text: "Consistent demand from regional infrastructure development" },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 leading-tight">
              Environmental <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-white">Infrastructure Investment</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                This facility represents a future-ready environmental infrastructure asset designed to prevent ecosystem damage while generating sustainable revenue through engineered waste recovery, groundwater protection, and elimination of destructive mining practices.
              </p>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-inner my-8">
                <img src={investorStock} alt="Investor Site Visit" className="w-full h-64 object-cover" />
              </div>
              <p className="text-lg text-muted-foreground">
                We bridge the gap between industrial waste management and environmental protection by eliminating river sand mining dependency, preventing slurry dumping, and protecting groundwater through closed-loop systems.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((item, i) => (
                <div key={i} className="bg-background/50 border border-white/5 p-6 rounded-lg flex flex-col gap-4 hover:border-secondary/30 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-tertiary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-white font-medium leading-snug">{item.text}</p>
                </div>
              ))}
              
              <div className="col-span-1 sm:col-span-2 bg-accent/10 border border-accent/20 p-6 rounded-lg flex items-center justify-center text-center">
                <p className="text-tertiary font-medium">Environmentally responsible revenue generation</p>
              </div>
            </div>

            {/* Content Enrichment */}
            <div className="mt-12 space-y-8">
              <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">Strategic Investment Rationale</h4>
              
              <div className="grid gap-6">
                <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-4">
                  <h5 className="text-tertiary font-bold uppercase tracking-wider text-xs">Resource Efficiency & Scale</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The project integrates South India’s only super primary processing unit (550 TPH) within a total plant capacity of 800+ TPH, enabling high-throughput recycling operations with strong capital efficiency. The facility sits on a strategic 6-acre land parcel, providing ample space for optimized stockyard management, high-volume water treatment systems, and future modular capacity expansion.
                  </p>
                </div>
                
                <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-4">
                  <h5 className="text-tertiary font-bold uppercase tracking-wider text-xs">Environmental Risk Mitigation & Market Gap</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With rapid urbanization and increasing state-level restrictions on natural river sand mining, BlackDiamondGranites eliminates environmental damage by providing certified recycled materials that prevent ecosystem destruction. Our engineered waste recovery system offers a sustainable, compliant, and cost-effective alternative for Tier-1 infrastructure developers while protecting groundwater and eliminating slurry dumping.
                  </p>
                </div>

                <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <h6 className="text-white font-bold text-[10px] uppercase">CAPEX Advantage</h6>
                      <p className="text-[11px] text-muted-foreground">Leveraging existing infrastructure to minimize entry costs and maximize ROI.</p>
                    </div>
                    <div className="space-y-2">
                      <h6 className="text-white font-bold text-[10px] uppercase">Operational Stability</h6>
                      <p className="text-[11px] text-muted-foreground">Scalable process logic with redundant safety and environmental systems.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg font-bold text-white tracking-wide border-l-4 border-accent pl-6 py-2 italic bg-accent/5">
                Engineered to prevent environmental damage while generating sustainable revenue through closed-loop waste recovery, groundwater protection, elimination of ecosystem-destructive practices, and safeguarding aquatic ecosystems from contamination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
