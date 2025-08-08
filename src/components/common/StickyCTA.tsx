import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Receipt } from "lucide-react";
import { useEffect, useState } from "react";

const StickyCTA = () => {
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();
  useEffect(()=>{ setHidden(false); }, [pathname]);
  return (
    <div className={`fixed bottom-6 right-6 flex flex-col gap-3 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity`}>
      <Link to="/quotation" className="rounded-full px-4 py-3 shadow-lg bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] flex items-center gap-2 hover-scale" aria-label="Request a Quote">
        <Receipt size={18}/> Request a Quote
      </Link>
      <a href="https://wa.me/919346122148?text=Hi%20Digital%20Lift%20Hub%2C%20I%27d%20like%20a%20quote" target="_blank" rel="noopener" className="rounded-full p-3 shadow-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover-scale" aria-label="WhatsApp chat">
        <MessageCircle />
      </a>
    </div>
  );
};
export default StickyCTA;