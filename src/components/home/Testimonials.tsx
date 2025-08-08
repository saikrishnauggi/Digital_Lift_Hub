import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  { name: "Ravi", role: "Founder, Local Cafe", quote: "Digital Lift Hub boosted our Instagram reach by 3x in a month.", rating: 5 },
  { name: "Aisha", role: "Boutique Owner", quote: "Their creatives are premium and on-brand. Loved the reels!", rating: 5 },
  { name: "Manish", role: "Clinic Manager", quote: "Professional reports and clear strategy. Solid ROI.", rating: 5 },
];

const StarRow = ({ count }:{count:number}) => (
  <div className="flex gap-1 text-[hsl(var(--accent))]" aria-label={`${count} star rating`}>
    {Array.from({length: count}).map((_,i)=>(<span key={i}>★</span>))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
      <Carousel>
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full bg-card border rounded-xl p-6 shadow-sm animate-enter" aria-label={`Testimonial by ${t.name}`}>
                <StarRow count={t.rating} />
                <p className="mt-3 text-lg">“{t.quote}”</p>
                <p className="mt-4 text-sm text-muted-foreground">{t.name} — {t.role}</p>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;