import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3" : "bg-linear-to-b from-black/80 to-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-white to-secondary rounded-sm rotate-45 flex items-center justify-center font-heading font-bold text-background text-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <span className="-rotate-45">BD</span>
          </div>
          <span className="font-heading font-bold text-2xl tracking-tighter text-white uppercase italic leading-none">
            BlackDiamond<span className="text-secondary not-italic font-light">Granites</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a href="/" className="text-white hover:text-secondary transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full"></span>
          </a>
          <a href="/impact-calculator" className="text-white/70 hover:text-white transition-colors relative group">
            Impact Calculator
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="/about" className="text-white/70 hover:text-white transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="/technology" className="text-white/70 hover:text-white transition-colors relative group">
            Technology
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="/products" className="text-white/70 hover:text-white transition-colors relative group">
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors relative group">
            Investors
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <button className="px-6 py-2 bg-secondary text-background hover:bg-white text-[11px] font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-secondary/20">
          Partner With Us
        </button>
      </div>
    </header>
  );
}
