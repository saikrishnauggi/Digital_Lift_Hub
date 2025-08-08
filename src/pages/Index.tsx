import SEO from "@/components/common/SEO";
import Testimonials from "@/components/home/Testimonials";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      <SEO title="Digital Lift Hub | Social Media & Branding" description="Hyderabad digital marketing agency: social media, reels, branding, campaigns, analytics. Request a quote today." />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'var(--gradient-hero)'}} aria-hidden="true"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-[hsl(var(--primary-foreground))]">
          <img src="/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png" alt="Digital Lift Hub brand mark" className="mx-auto h-16 w-16 mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Lift Your Brand Digitally</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Social media marketing, reels, branding, and data-driven strategy for fast-growing businesses.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link to="/quotation" className="px-6 py-3 rounded-lg bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-lg hover-scale">Request a Quote</Link>
            <Link to="/services" className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/15 transition">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">What We Deliver</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Social Media Marketing',
              desc: '6+ posts/month with captions to grow brand presence.',
            },
            {
              title: 'Reels & Short Videos',
              desc: '4 professionally edited reels every month.',
            },
            {
              title: 'Branding & Design',
              desc: 'Logo, templates, posters, stories — all on-brand.',
            },
            {
              title: 'Strategy & Planning',
              desc: 'Monthly goals with campaign planning and feedback.',
            },
            {
              title: 'Analytics & Reporting',
              desc: 'End-of-month performance summary and insights.',
            },
            {
              title: 'Transparent Pricing',
              desc: '₹25,000/month • Advance ₹12,500 • Balance ₹12,500',
            },
          ].map((s) => (
            <article key={s.title} className="p-6 rounded-xl border bg-card shadow-sm animate-enter">
              <h3 className="font-semibold text-xl">{s.title}</h3>
              <p className="text-muted-foreground mt-2">{s.desc}</p>
              <Link to={`/quotation?service=${encodeURIComponent(s.title)}`} className="mt-4 inline-block story-link">Request quote for {s.title}</Link>
            </article>
          ))}
        </div>
      </section>

      <Testimonials />
    </main>
  );
};

export default Index;