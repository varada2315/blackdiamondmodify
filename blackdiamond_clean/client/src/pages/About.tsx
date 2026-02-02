import { motion } from "framer-motion";
import { ArrowRight, Factory, Recycle, Leaf } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80 scale-105 animate-very-slow-zoom"
          style={{ 
            backgroundImage: "url('/assets/industrial_stone_cru_30a75893.jpg')" 
          }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 h-full flex items-center pt-20">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Black Diamond Granites
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering sustainable granite recycling with cutting-edge technology and environmental responsibility.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Factory className="w-8 h-8 text-tertiary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-tertiary/70 leading-relaxed">
              To revolutionize the granite industry by transforming waste into valuable resources through advanced recycling technology, setting new standards for environmental responsibility and circular economy practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Recycle className="w-8 h-8 text-tertiary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-tertiary/70 leading-relaxed">
              To become the global leader in sustainable granite processing, demonstrating that industrial efficiency and environmental stewardship can coexist harmoniously.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-tertiary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-tertiary/70 leading-relaxed">
              Innovation, sustainability, quality, and responsibility guide every decision we make, ensuring long-term success for our business and the planet.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-card">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                800+ TPH Total Capacity
              </h2>
              <p className="text-tertiary/70 text-lg leading-relaxed mb-8">
                Our state-of-the-art facility integrates South India’s only super primary processing unit (550 TPH) within an overall 800+ TPH total capacity, transforming what was once considered unusable material into premium construction products. This scale of operation allows us to serve major infrastructure projects while maintaining the highest quality standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">6-Acre Facility</h4>
                  <p className="text-secondary/60 text-sm">Optimized layout for maximum efficiency and minimal environmental impact</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Zero Waste</h4>
                  <p className="text-secondary/60 text-sm">Every material stream is captured and utilized</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Circular Economy</h4>
                  <p className="text-secondary/60 text-sm">Closed-loop processing with minimal external inputs</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Compliance</h4>
                  <p className="text-secondary/60 text-sm">Meets all environmental and safety regulations</p>
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-secondary/60 text-sm">Material Recovery Rate</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white">0</div>
                    <div className="text-secondary/60 text-sm">Landfill Waste</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-secondary/60 text-sm">Operational Capacity</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-secondary/60 text-sm">Quality Assurance</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Join the Sustainable Revolution
          </h2>
          <p className="text-tertiary/70 text-lg leading-relaxed mb-12">
            Black Diamond Granites represents the future of responsible industrial processing. Our commitment to innovation, sustainability, and quality ensures that we not only meet today's demands but also pave the way for a more sustainable tomorrow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
