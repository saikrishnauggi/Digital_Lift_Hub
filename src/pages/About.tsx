import SEO from "@/components/common/SEO";

const About = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="About Digital Lift Hub" description="Our story, mission and the founders behind Digital Lift Hub in Hyderabad." />
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-muted-foreground max-w-3xl">Digital Lift Hub is a Hyderabad-based digital marketing studio helping brands grow with strategy-led social media, premium creatives, and clear reporting. We believe in honest communication, consistent delivery, and measurable results.</p>
      <section className="grid md:grid-cols-2 gap-6 mt-10">
        <article className="p-6 border rounded-xl bg-card">
          <img src="/lovable-uploads/laxman.jpg" alt="Laxman - Co-Founder & Creative Director" className="h-16 w-16" />
          <h2 className="mt-4 text-xl font-semibold">Laxman</h2>
          <p className="text-sm text-muted-foreground">Co-Founder & Creative Director</p>
          <p className="mt-3">Leads brand design and content quality ensuring every creative is scroll-stopping and on-brand.</p>
        </article>
        <article className="p-6 border rounded-xl bg-card">
          <img src="/lovable-uploads/0fa6793e-7bf9-4d2c-b832-b3306de285d8.png" alt="Sai Krishna - Co-Founder & Digital Strategist" className="h-16 w-16" />
          <h2 className="mt-4 text-xl font-semibold">Sai Krishna</h2>
          <p className="text-sm text-muted-foreground">Co-Founder & Digital Strategist</p>
          <p className="mt-3">Owns the growth strategy, campaign planning, and performance analysis for sustainable results.</p>
        </article>
      </section>
    </main>
  );
};

export default About;