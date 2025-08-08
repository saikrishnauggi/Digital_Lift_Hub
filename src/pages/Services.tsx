import SEO from "@/components/common/SEO";
import { Link } from "react-router-dom";

const services = [
  { key: 'Social Media Marketing', desc: '6+ posts per month with captions' },
  { key: 'Reels & Short Video Editing', desc: '4 professionally edited reels per month' },
  { key: 'Branding & Graphic Design', desc: 'Logo, templates, posters, stories' },
  { key: 'Marketing Strategy & Campaign Planning', desc: 'Monthly goals, planning, feedback' },
  { key: 'Analytics & Reporting', desc: 'End-of-month performance report' },
];

const Services = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="Services | Digital Lift Hub" description="Social media marketing, reels, branding, strategy, analytics. Choose a service to request a quote." />
      <h1 className="text-3xl font-bold mb-8">Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s)=> (
          <article key={s.key} className="p-6 border rounded-xl bg-card">
            <h2 className="text-xl font-semibold">{s.key}</h2>
            <p className="text-muted-foreground mt-2">{s.desc}</p>
            <Link to={`/quotation?service=${encodeURIComponent(s.key)}`} className="mt-4 inline-block px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover-scale" aria-label={`Request quote for ${s.key}`}>
              Request Quote
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Services;