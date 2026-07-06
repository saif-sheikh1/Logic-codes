import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-sm flex items-center justify-center">
                <span className="text-black text-lg font-black">L</span>
              </div>
              Logic Codes
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming Businesses Through Intelligent Technology. We build premium digital experiences and AI automation systems.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">AI Voice Agents</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">AI Chatbots</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Web Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Business Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#process" className="text-gray-400 hover:text-gold text-sm transition-colors">Our Process</Link></li>
              <li><Link href="#case-studies" className="text-gray-400 hover:text-gold text-sm transition-colors">Case Studies</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-gold text-sm transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-gold text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Logic Codes. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Designed with <span className="text-gold">♥</span> for enterprise
          </p>
        </div>
      </div>
    </footer>
  );
}
