import SEO from "@/components/common/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="FAQ | Digital Lift Hub" description="Answers to common questions about packages, timelines, and payments." />
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the monthly cost and payment schedule?</AccordionTrigger>
          <AccordionContent>Our plan is ₹25,000/month. Advance ₹12,500 due on onboarding; remaining ₹12,500 due by month-end. Payments via UPI/NEFT/Bank Transfer.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What do I get each month?</AccordionTrigger>
          <AccordionContent>6+ social posts with captions, 4 edited reels, branding support, campaign planning, and an end-of-month report.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How many revisions are included?</AccordionTrigger>
          <AccordionContent>Up to 2 revisions per asset. Additional changes can be accommodated at an agreed fee.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default FAQ;