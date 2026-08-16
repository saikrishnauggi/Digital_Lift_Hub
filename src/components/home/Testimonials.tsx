import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Dr. Navneeth Servey",
    role: "Managing Director",
    quote: "Digital Lift Hub transformed our digital presence and gave us a polished, trustworthy brand image that started bringing the right audience.",
    rating: 5,
  },
  {
    name: "Charan Dancer",
    role: "Kalavathi Events",
    quote: "They combined creativity with strategy beautifully. Every campaign felt premium, organized, and genuinely aligned with our brand.",
    rating: 5,
  },
  {
    name: "Manish",
    role: "Clinic Manager",
    quote: "Professional communication, clean execution, and measurable results. Their reporting made it easy to see the return on investment.",
    rating: 5,
  },
];

const StarRow = ({ count }:{count:number}) => (
  <div className="flex gap-1 text-[hsl(var(--accent))]" aria-label={`${count} star rating`}>
    {Array.from({ length: count }).map((_, i) => (<span key={i}>★</span>))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="section-shell py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">Client feedback</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Loved by businesses that want to grow</h2>
      </div>

      <Carousel>
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <article
                className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.8)]"
                aria-label={`Testimonial by ${t.name}`}
              >
                <StarRow count={t.rating} />
                <p className="mt-4 text-lg leading-relaxed text-slate-700">“{t.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;