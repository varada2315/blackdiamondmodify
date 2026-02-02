import { motion } from "framer-motion";
import { Package, Droplet, Ruler, Layers } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Products() {
  const products = [
    {
      name: "Granite Aggregates",
      grade: "Premium",
      size: "10-20mm",
      applications: ["Construction", "Road Building", "Railway Ballast"],
      image: "/assets/stock_images/modern_sustainable_i_1715b137.jpg"
    },
    {
      name: "Granite Sand",
      grade: "Fine",
      size: "0.5-2mm",
      applications: ["Concrete Mix", "Mortar", "Plastering"],
      image: "/assets/stock_images/recycled_constructio_af69655d.jpg"
    },
    {
      name: "Granite Fines",
      grade: "Ultra-Fine",
      size: "0.075-0.5mm",
      applications: ["Filler Material", "Asphalt", "Industrial Applications"],
      image: "/assets/stock_images/modern_granite_recyc_20dfba5e.jpg"
    },
    {
      name: "Granite Dust",
      grade: "Micro",
      size: "<0.075mm",
      applications: ["Soil Stabilization", "Agriculture", "Manufacturing"],
      image: "/assets/stock_images/industrial_stone_cru_30a75893.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80 scale-105 animate-very-slow-zoom"
          style={{ 
            backgroundImage: "url('/assets/stock_images/modern_sustainable_i_1715b137.jpg')" 
          }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Recycled Products
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              High-quality construction materials derived from sustainable granite recycling processes.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              Quality You Can Trust
            </h2>
            <p className="text-tertiary/70 text-lg leading-relaxed mb-8">
              Every product from Black Diamond Granites undergoes rigorous quality control to ensure it meets or exceeds industry standards. Our recycled materials offer the same performance characteristics as virgin materials while providing significant environmental benefits.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-secondary/60 text-sm">Purity Guarantee</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">ISO 9001</div>
                <div className="text-secondary/60 text-sm">Quality Certified</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-secondary/60 text-sm">Quality Monitoring</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-secondary/60 text-sm">Traceability</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-accent/20 to-transparent rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white">800+ TPH</div>
                  <div className="text-secondary/60 text-sm">Total Capacity</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white">6 Acres</div>
                  <div className="text-secondary/60 text-sm">Production Facility</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-secondary/60 text-sm">Material Recovery</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white">0%</div>
                  <div className="text-secondary/60 text-sm">Landfill Waste</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border group hover:border-accent/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-2 py-1 text-xs font-semibold rounded-full">
                    {product.grade}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-tertiary/60 text-sm mb-4">Size: {product.size}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Ruler className="w-4 h-4 text-accent" />
                    <span className="text-tertiary/70 text-sm">Precise Sizing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Droplet className="w-4 h-4 text-accent" />
                    <span className="text-tertiary/70 text-sm">Moisture Control</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {product.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-tertiary/70 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-card to-background rounded-2xl p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              Custom Solutions Available
            </h2>
            <p className="text-tertiary/70 text-lg leading-relaxed mb-12">
              We understand that every project has unique requirements. Our team works closely with clients to develop customized product specifications and delivery schedules that meet your exact needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-4">Custom Blending</h4>
                <p className="text-secondary/60 text-sm">Tailored material mixes for specific applications</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-4">Bulk Packaging</h4>
                <p className="text-secondary/60 text-sm">Flexible packaging options for any volume</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-4">Just-in-Time Delivery</h4>
                <p className="text-secondary/60 text-sm">Optimized logistics for project efficiency</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Request Product Catalog
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
