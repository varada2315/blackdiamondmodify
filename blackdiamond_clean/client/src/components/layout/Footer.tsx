
export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-2 italic">BlackDiamond<span className="font-light not-italic text-secondary">Granites</span></h2>
            <p className="text-sm text-muted-foreground max-w-md">
              A premium industrial initiative transforming waste into resource through precision engineering.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 flex gap-8">
            <a href="/#investors" className="text-sm text-gray-400 hover:text-white transition-colors">Investment</a>
            <a href="/technology" className="text-sm text-gray-400 hover:text-white transition-colors">Technology</a>
            <a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">Compliance</a>
            <a href="/#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2026 Granite Waste Recycling Plant. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
