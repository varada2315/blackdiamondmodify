import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function scrollToId(id: string) {
  if (typeof window === "undefined") return;

  let tries = 0;
  const maxTries = 30;

  const attempt = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    tries += 1;
    if (tries < maxTries) setTimeout(attempt, 50);
  };

  attempt();
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () =>
      [
        { label: "Home", href: "/" },
        { label: "Impact Calculator", href: "/impact-calculator" },
        { label: "About", href: "/about" },
        { label: "Technology", href: "/technology" },
        { label: "Products", href: "/products" },
      ] as const,
    [],
  );

  function handleHashNav(hash: "#investors" | "#contact") {
    if (typeof window === "undefined") return;

    const id = hash.replace(/^#/, "");

    // If we aren't already on Home, navigate there first so the section exists.
    if (location !== "/") {
      setLocation("/");
      // Wait for route + render, then scroll.
      setTimeout(() => {
        window.location.hash = hash;
        scrollToId(id);
      }, 0);
      return;
    }

    window.location.hash = hash;
    scrollToId(id);
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3" : "bg-linear-to-b from-black/80 to-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm">
          <div className="w-10 h-10 bg-linear-to-br from-white to-accent rounded-sm rotate-45 flex items-center justify-center font-heading font-bold text-background text-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <span className="-rotate-45">BD</span>
          </div>
          <span className="font-heading font-bold text-2xl tracking-tighter text-white uppercase italic leading-none">
            BlackDiamond<span className="text-accent not-italic font-light">Granites</span>
          </span>
        </Link>
        
        <nav aria-label="Primary" className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          {navLinks.map((l) => {
            const isActive = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm px-1",
                  isActive ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[1px] transition-all",
                    isActive
                      ? "w-full bg-accent"
                      : "w-0 bg-white group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => handleHashNav("#investors")}
            className="text-white/70 hover:text-white transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm px-1"
          >
            Investors
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
          </button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="border-white/10">
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        "text-sm font-bold uppercase tracking-widest py-3 px-3 rounded-md transition-colors",
                        location === l.href
                          ? "bg-white/10 text-white"
                          : "text-white/80 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <button
                    type="button"
                    onClick={() => handleHashNav("#investors")}
                    className="text-sm font-bold uppercase tracking-widest py-3 px-3 rounded-md text-white/80 hover:bg-white/5 hover:text-white transition-colors text-left"
                  >
                    Investors
                  </button>
                </SheetClose>

                <SheetClose asChild>
                  <button
                    type="button"
                    onClick={() => handleHashNav("#contact")}
                    className="text-sm font-bold uppercase tracking-widest py-3 px-3 rounded-md text-white/80 hover:bg-white/5 hover:text-white transition-colors text-left"
                  >
                    Contact
                  </button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <button
          type="button"
          onClick={() => handleHashNav("#contact")}
          className="hidden md:inline-flex px-6 py-2 bg-accent text-white hover:bg-accent/90 text-[11px] font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        >
          Partner With Us
        </button>
      </div>
    </header>
  );
}
