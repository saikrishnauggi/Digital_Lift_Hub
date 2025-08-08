/* import SEO from "@/components/common/SEO";

const Portfolio = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="Portfolio | Digital Lift Hub" description="Case studies with before/after visuals and short results." />
      <h1 className="text-3xl font-bold mb-6">Portfolio / Case Studies</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i)=> (
          <article key={i} className="p-4 border rounded-xl bg-card">
            <div className="aspect-[16/9] bg-muted rounded-md" aria-label="Before/After placeholder"></div>
            <h2 className="mt-3 font-semibold">Project {i}</h2>
            <p className="text-sm text-muted-foreground">Increased reach by 2.5x and CTR by 35% through reels and targeted campaigns.</p>
            <div className="mt-3 aspect-[16/9]">
              <iframe className="w-full h-full rounded-md" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Case study video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;*/

import SEO from "@/components/common/SEO";

const Portfolio = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <SEO
        title="Portfolio | Digital Lift Hub"
        description="Real case studies and success stories from Digital Lift Hub — coming soon."
      />
      
      <h1 className="text-3xl font-bold mb-6">Portfolio / Case Studies</h1>

      <div className="p-6 border rounded-xl bg-card text-center max-w-xl mx-auto">
        <p className="text-lg font-medium">🚧 Real client work is on the way.</p>
        <p className="text-muted-foreground mt-2">
          We’re currently working on some exciting projects. Case studies will be published here soon to showcase real results and transformations.
        </p>
        <p className="mt-4 text-sm text-muted-foreground italic">
          In the meantime, feel free to <a href="/contact" className="underline hover:text-foreground">reach out</a> if you'd like to learn more about how we can help your business grow.
        </p>
      </div>
    </main>
  );
};

export default Portfolio;
