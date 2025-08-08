import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png" alt="Digital Lift Hub logo" className="h-8 w-8" />
            <span className="font-semibold">Digital Lift Hub</span>
          </div>
          <p className="text-sm text-muted-foreground">Hyderabad, Telangana</p>
          <p className="text-sm text-muted-foreground mt-2">Founders: Laxman (Co-Founder & Creative Director), Sai Krishna (Co-Founder & Digital Strategist)</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={16}/> <a href="mailto:digitallifthubmarketing@gmail.com" className="story-link">digitallifthubmarketing@gmail.com</a></li>
            <li className="flex items-center gap-2"><Phone size={16}/> <a href="tel:+919346122148" className="story-link">+91 93461 22148</a></li>
            <li className="flex items-center gap-2"><Phone size={16}/> <a href="tel:+919398036854" className="story-link">+91 93980 36854</a></li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Hyderabad, Telangana</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="story-link" to="/services">Services</Link></li>
            <li><Link className="story-link" to="/portfolio">Portfolio</Link></li>
            <li><Link className="story-link" to="/quotation">Quotation</Link></li>
            <li><Link className="story-link" to="/agreement">Client Agreement</Link></li>
            <li><Link className="story-link" to="/privacy">Privacy Policy</Link></li>
            <li><a className="story-link" href="/sitemap.xml" target="_blank" rel="noopener">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Stay in the loop</h4>
          <form action="https://formspree.io/f/your-newsletter-id" method="POST" className="space-y-2" aria-label="Newsletter signup">
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
            <input name="email" type="email" required placeholder="Your email" className="w-full px-3 py-2 rounded-md bg-secondary text-foreground" aria-label="Email address" />
            <button className="w-full px-3 py-2 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover-scale" type="submit">Subscribe</button>
          </form>
          <div className="flex gap-3 mt-4 text-muted-foreground">
            <a href="#" aria-label="YouTube" className="hover-scale"><Youtube /></a>
            <a href="#" aria-label="Instagram" className="hover-scale"><Instagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover-scale"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-8">© {new Date().getFullYear()} Digital Lift Hub. All rights reserved.</div>
    </footer>
  );
};

export default SiteFooter;