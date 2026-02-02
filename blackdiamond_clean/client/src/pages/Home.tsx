import Hero from "@/components/sections/Hero";
import ProcessFlow from "@/components/sections/ProcessFlow";
import Sustainability from "@/components/sections/Sustainability";
import OutputProducts from "@/components/sections/OutputProducts";
import InvestorValue from "@/components/sections/InvestorValue";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <ProcessFlow />
      <Sustainability />
      <OutputProducts />
      <section id="investors">
        <InvestorValue />
      </section>

      <section id="contact" className="bg-background">
        <div className="container mx-auto px-6 pb-24">
          <div className="rounded-2xl border border-white/10 bg-card p-10 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  Partner With Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reach out for investment discussions, technical specifications, or product availability.
                  We’ll respond with timelines, compliance documentation, and logistics options.
                </p>

                <div className="mt-8 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-6 border-t border-white/5 pt-4">
                    <span className="text-white/70 uppercase tracking-widest text-[11px] font-bold">Email</span>
                    <a className="text-white hover:text-accent transition-colors" href="mailto:partner@blackdiamondgranites.com">
                      partner@blackdiamondgranites.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-6 border-t border-white/5 pt-4">
                    <span className="text-white/70 uppercase tracking-widest text-[11px] font-bold">Phone</span>
                    <a className="text-white hover:text-accent transition-colors" href="tel:+910000000000">
                      +91 00000 00000
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors resize-y"
                    placeholder="Tell us what you’re looking for (investor deck, specs, pricing, volumes, etc.)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex justify-center px-6 py-3 rounded-xl bg-accent text-white font-bold uppercase tracking-widest text-[11px] hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  Send Inquiry
                </button>

                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  This form is currently a UI stub (no backend endpoint yet).
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
