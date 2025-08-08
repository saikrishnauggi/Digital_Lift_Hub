import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/quotation", label: "Quotation" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png" alt="Digital Lift Hub logo" className="h-9 w-9" loading="eager" />
          <span className="font-semibold">Digital Lift Hub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive})=>`story-link ${isActive ? 'text-primary' : 'text-foreground/80'} transition-colors`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/quotation" className="px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow" aria-label="Request a Quote">
          Request a Quote
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;