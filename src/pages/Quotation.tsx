import SEO from "@/components/common/SEO";
import { useEffect, useMemo, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const baseItems = [
  { name: 'Social Media Posts', qty: 6, unit: 'per month', price: 0 },
  { name: 'Reels Editing', qty: 4, unit: 'per month', price: 0 },
  { name: 'Branding & Design', qty: 1, unit: 'bundle', price: 0 },
  { name: 'Strategy & Planning', qty: 1, unit: 'monthly', price: 0 },
  { name: 'Analytics Report', qty: 1, unit: 'monthly', price: 0 },
];

const services = [
  { key: 'Social Media Marketing', price: 6000 },
  { key: 'Reels & Short Video Editing', price: 6000 },
  { key: 'Branding & Graphic Design', price: 6000 },
  { key: 'Marketing Strategy & Campaign Planning', price: 5500 },
  { key: 'Analytics & Reporting', price: 1500 },
];

const Quotation = () => {
  const [params, setParams] = useSearchParams();
  const selected = useMemo(()=> new Set((params.get('service')||'').split(',').filter(Boolean)), [params]);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if (!params.get('service')) {
      setParams({ service: services.map(s=>s.key).join(',') });
    }
  }, [params, setParams]);

  const toggle = (key:string) => {
    const cur = new Set(selected);
    if (cur.has(key)) cur.delete(key); else cur.add(key);
    setParams({ service: Array.from(cur).join(',') });
  };

  const total = services.filter(s=>selected.has(s.key)).reduce((sum, s)=> sum + s.price, 0);

  const downloadPdf = async () => {
    if (!quoteRef.current) return;
    const canvas = await html2canvas(quoteRef.current, { scale: 2, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const ratio = pageWidth / canvas.width;
    const height = canvas.height * ratio;
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, height);
    pdf.save('Digital-Lift-Hub-Quotation.pdf');
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="Quotation | Digital Lift Hub" description="Interactive quotation builder with instant totals and downloadable PDF." />
      <h1 className="text-3xl font-bold mb-6">Quotation</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <aside className="lg:col-span-1 p-4 border rounded-xl bg-card h-fit">
          <h2 className="font-semibold mb-3">Select Services</h2>
          <ul className="space-y-2">
            {services.map((s)=> (
              <li key={s.key} className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={selected.has(s.key)} onChange={()=>toggle(s.key)} aria-label={`Select ${s.key}`} />
                  <span>{s.key}</span>
                </label>
                <span className="text-muted-foreground">₹{s.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-muted-foreground">Payment modes: UPI / NEFT / Bank Transfer</div>
        </aside>

        <section className="lg:col-span-2 space-y-4">
          <div ref={quoteRef} className="p-6 border rounded-xl bg-white text-black">
            <header className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Digital Lift Hub — Quotation</h2>
                <p className="text-sm">Hyderabad, Telangana • digitallifthubmarketing@gmail.com • +91 93461 22148</p>
              </div>
              <img src="/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png" alt="Digital Lift Hub logo" className="h-10 w-10" />
            </header>

            <table className="w-full mt-6 text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Deliverable</th>
                  <th>Qty</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {baseItems.map((i)=> (
                  <tr key={i.name} className="border-b">
                    <td className="py-2">{i.name}</td>
                    <td>{i.qty}</td>
                    <td>{i.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6">
              <h3 className="font-semibold">Selected Services & Pricing</h3>
              <ul className="list-disc pl-5">
                {services.filter(s=>selected.has(s.key)).map(s=> (
                  <li key={s.key}>{s.key} — ₹{s.price}</li>
                ))}
              </ul>
              <p className="mt-4 font-semibold">Total Monthly Cost: ₹{total || 25000}</p>
              <p className="text-sm">Advance: ₹12,500 (on onboarding) • Balance: ₹12,500 (month-end)</p>
              <p className="text-xs mt-2">Delivery: Weekly rollouts + monthly report (Weekly Off: Sunday)</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={downloadPdf} className="px-4 py-2 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">Download PDF</button>
            <Link to="/agreement" className="px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">Accept Quote</Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Quotation;