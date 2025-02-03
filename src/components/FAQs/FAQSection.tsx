import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What is BrandCraftersAI?",
    answer: "BrandCraftersAI is a digital solutions company offering services like social media management, content creation, branding, website development, and more."
  },
  {
    question: "Who are your services designed for?",
    answer: "We cater to individuals, businesses, content creators, and niche industries like restaurants and florists."
  },
  {
    question: "How can I get started with your services?",
    answer: "Contact us through our website, select a plan, or request a free consultation to explore your options."
  },
  {
    question: "Can I customize my plan?",
    answer: "Yes, we provide customizable plans to suit your specific needs and goals."
  },
  {
    question: "Do you offer website management after development?",
    answer: "Absolutely! We provide maintenance, updates, and feature enhancements for your website."
  },
  {
    question: "What's included in your branding packages?",
    answer: "Our branding packages include logo design, social media content, website development, and email marketing."
  },
  {
    question: "How long does a project take to complete?",
    answer: "Timelines vary based on the project, but we'll provide an estimate during our initial consultation."
  },
  {
    question: "How do you support content creators?",
    answer: "We assist content creators with video editing, YouTube shorts, documentaries, and audio-visual storytelling."
  },
  {
    question: "Do you offer discounts for long-term collaborations?",
    answer: "Yes, discounts are available for bundled services or long-term partnerships."
  },
  {
    question: "How do I track the progress of my project?",
    answer: "You'll receive regular updates and have a dedicated point of contact throughout the process."
  }
];

export function FAQSection() {
  return (
    <section id="faqs" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}