import SEO from "@/components/common/SEO";

const Contact = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="Contact | Digital Lift Hub" description="Contact Digital Lift Hub in Hyderabad. Phone, email, and a contact form with Map." />
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <form action="https://formspree.io/f/your-contact-id" method="POST" className="space-y-3" aria-label="Contact form">
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
            <input className="w-full px-3 py-2 rounded-md bg-secondary" name="name" placeholder="Name" required />
            <input className="w-full px-3 py-2 rounded-md bg-secondary" name="email" type="email" placeholder="Email" required />
            <input className="w-full px-3 py-2 rounded-md bg-secondary" name="phone" placeholder="Phone" />
            <textarea className="w-full px-3 py-2 rounded-md bg-secondary" name="message" placeholder="Message" rows={5} required />
            <button className="px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">Send Message</button>
          </form>
          <div className="mt-4 text-sm">
            <p><a href="mailto:digitallifthubmarketing@gmail.com" className="story-link">digitallifthubmarketing@gmail.com</a></p>
            <p className="mt-1"><a href="tel:+919346122148" className="story-link">+91 93461 22148</a> • <a href="tel:+919398036854" className="story-link">+91 93980 36854</a></p>
          </div>
        </section>
        <section>
          <iframe title="Digital Lift Hub on Google Maps" className="w-full h-80 rounded-xl border" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Hyderabad%2C%20Telangana&output=embed"></iframe>
        </section>
      </div>
    </main>
  );
};

export default Contact;