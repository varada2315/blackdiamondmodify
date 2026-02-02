import { motion } from "framer-motion";
import { Settings, Zap, Shield, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";

export default function Technology() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80 scale-105 animate-very-slow-zoom"
          style={{ 
            backgroundImage: "url('/assets/modern_granite_recyc_20dfba5e.jpg')" 
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
              Advanced Processing Technology
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cutting-edge systems designed for maximum efficiency and minimal environmental impact.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-xl border border-border"
          >
            <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center mb-6">
              <Settings className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Automated Sorting</h3>
            <p className="text-tertiary/70 leading-relaxed">
              AI-powered optical sorting systems that identify and separate different material types with 99.5% accuracy, ensuring optimal material recovery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card p-8 rounded-xl border border-border"
          >
            <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Energy Efficiency</h3>
            <p className="text-tertiary/70 leading-relaxed">
              Advanced motor systems and optimized processing flows reduce energy consumption by 40% compared to traditional granite processing methods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-xl border border-border"
          >
            <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Dust Control</h3>
            <p className="text-tertiary/70 leading-relaxed">
              Multi-stage dust collection systems capture 99.9% of particulates, maintaining air quality and protecting worker health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-8 rounded-xl border border-border"
          >
            <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Quality Monitoring</h3>
            <p className="text-tertiary/70 leading-relaxed">
              Real-time quality analysis systems ensure consistent product specifications and immediate process adjustments when needed.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                250 TPH Processing Line
              </h2>
              <p className="text-tertiary/70 text-lg leading-relaxed mb-8">
                Our advanced processing line handles 250 tons per hour with precision engineering and intelligent automation. Every component is designed for maximum throughput while maintaining the highest quality standards.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-white">Primary crushing with variable speed control</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-white">Secondary processing with particle size optimization</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-white">Tertiary refinement for premium product quality</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-white">Automated packaging and distribution systems</span>
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
                    <div className="text-2xl font-bold text-white">99.5%</div>
                    <div className="text-secondary/60 text-sm">Sorting Accuracy</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-white">40%</div>
                    <div className="text-secondary/60 text-sm">Energy Reduction</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-secondary/60 text-sm">Dust Capture</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-secondary/60 text-sm">Automated Operation</div>
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
            Future-Ready Technology
          </h2>
          <p className="text-tertiary/70 text-lg leading-relaxed mb-12">
            Our technology platform is designed for continuous improvement and adaptation. We invest heavily in R&D to ensure our systems remain at the forefront of sustainable processing technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg">
              <h4 className="text-white font-semibold mb-4">IoT Integration</h4>
              <p className="text-secondary/60 text-sm">Real-time monitoring and predictive maintenance</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h4 className="text-white font-semibold mb-4">AI Optimization</h4>
              <p className="text-secondary/60 text-sm">Machine learning for process efficiency</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h4 className="text-white font-semibold mb-4">Remote Management</h4>
              <p className="text-secondary/60 text-sm">Cloud-based system control and analytics</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
          >
            Request Technical Specifications
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
