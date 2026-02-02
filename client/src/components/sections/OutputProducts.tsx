import { ArrowRight } from "lucide-react";
import productsStock from '@assets/stock_images/recycled_constructio_af69655d.jpg';

export default function OutputProducts() {
  const products = [
    { name: "M-Sand", sub: "Manufactured Sand", desc: "High-strength alternative to river sand for concrete." },
    { name: "P-Sand", sub: "Plastering Sand", desc: "Fine-graded sand ideal for smooth plastering and masonry." },
    { name: "GSB & Aggregates", sub: "Granular Sub-Base", desc: "Foundational material for road and infrastructure projects." },
    { name: "Recycled Tiles & Pavers", sub: "Value-Added Products", desc: "Eco-friendly precast products for urban landscaping." },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">Recycled Construction Materials</h2>
            <p className="text-lg text-muted-foreground">
              Granite waste is transformed into high-quality, application-ready construction products suitable for infrastructure and building projects.
            </p>
          </div>
          <div className="lg:w-1/2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-64 w-full">
            <img src={productsStock} alt="Recycled Materials" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="group relative overflow-hidden h-[300px] border border-white/10 bg-card hover:bg-white/5 transition-colors duration-500">
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-tertiary transition-colors">{product.name}</h3>
                  <span className="text-sm text-tertiary/60 uppercase tracking-wider font-medium">{product.sub}</span>
                </div>
                
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm text-gray-400 mb-4">{product.desc}</p>
                  <span className="flex items-center text-tertiary text-sm font-medium">
                    View Specs <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute -bottom-4 -right-4 text-[120px] font-bold text-white/[0.02] leading-none select-none group-hover:text-white/[0.04] transition-colors">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Content Enrichment */}
        <div className="mt-16 max-w-4xl border-l-2 border-secondary pl-8">
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            Recycled outputs are produced from granite dust, slurry, and rejected stone blocks. These materials meet construction standards for infrastructure, concrete, and paving applications while reducing dependence on natural river sand and virgin aggregates.
          </p>
        </div>
      </div>
    </section>
  );
}
