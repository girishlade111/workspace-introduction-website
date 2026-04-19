import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">Lotion AI</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              The all-in-one workspace powered by AI agents. Write, plan, organize, and automate work — all in one place.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Github className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">AI Writing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">AI Tasks</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">AI Research</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Lotion AI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-foreground transition-colors">API Reference</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
