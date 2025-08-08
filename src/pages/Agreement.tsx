import SEO from "@/components/common/SEO";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Agreement = () => {
  const downloadPdf = async () => {
    const el = document.getElementById('agreement');
    if (!el) return;
    const canvas = await html2canvas(el, { scale: 2, backgroundColor: '#ffffff' });
    const img = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const ratio = pageWidth / canvas.width; const height = canvas.height * ratio;
    pdf.addImage(img, 'PNG', 0, 0, pageWidth, height); pdf.save('Digital-Lift-Hub-Agreement.pdf');
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="Client Agreement | Digital Lift Hub" description="Scope, confidentiality, revisions and terms. Sign digitally via Formspree." />
      <h1 className="text-3xl font-bold mb-6">Client Agreement</h1>

      <section id="agreement" className="p-6 border rounded-xl bg-white text-black">
        <header className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Digital Marketing Services Agreement</h2>
          <img src="/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png" alt="Digital Lift Hub logo" className="h-8 w-8" />
        </header>
        <p className="text-sm mt-2">Between Digital Lift Hub ("Agency") and the Client.</p>
        <h3 className="mt-4 font-semibold">Scope of Services</h3>
        <p className="text-sm">Social Media Marketing (6+ posts/month with captions), Reels Editing (4/month), Branding & Design (logo/templates/posters/stories), Strategy & Campaign Planning, Analytics & Reporting.</p>
        <h3 className="mt-4 font-semibold">Deliverables</h3>
        <p className="text-sm">Weekly rollouts, end-of-month performance report. Weekly Off: Sunday.</p>
        <h3 className="mt-4 font-semibold">Revisions</h3>
        <p className="text-sm">Up to 2 revisions per asset. Additional revisions billed separately.</p>
        <h3 className="mt-4 font-semibold">Confidentiality</h3>
        <p className="text-sm">Both parties agree to keep proprietary information confidential.</p>
        <h3 className="mt-4 font-semibold">Payments</h3>
        <p className="text-sm">Total Monthly Cost: ₹25,000. Advance ₹12,500 on onboarding; Balance ₹12,500 by month-end. Payment via UPI/NEFT/Bank Transfer.</p>
        <h3 className="mt-4 font-semibold">Termination</h3>
        <p className="text-sm">Either party may terminate with 7-day written notice. Dues for work completed remain payable.</p>
      </section>

      <div className="flex gap-3 mt-4">
        <button onClick={downloadPdf} className="px-4 py-2 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">Download PDF</button>
      </div>

      <section className="mt-8 p-6 border rounded-xl">
        <h2 className="font-semibold mb-3">E‑Signature</h2>
        <form action="https://formspree.io/f/your-agreement-id" method="POST" className="grid md:grid-cols-3 gap-4" aria-label="Agreement acceptance form">
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <input className="px-3 py-2 rounded-md bg-secondary" name="name" placeholder="Full Name" required />
          <input className="px-3 py-2 rounded-md bg-secondary" name="email" type="email" placeholder="Email" required />
          <input className="px-3 py-2 rounded-md bg-secondary" name="date" type="date" required />
          <label className="md:col-span-3 flex items-center gap-2 text-sm"><input type="checkbox" required /> I accept the terms in the Client Agreement.</label>
          <button className="md:col-span-3 px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">Submit Acceptance</button>
        </form>
        <p className="text-xs text-muted-foreground mt-2">Formspree endpoints are placeholders — replace with your IDs to receive emails.</p>
      </section>
    </main>
  );
};

export default Agreement;