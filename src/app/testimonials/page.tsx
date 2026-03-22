import TestimonialsSection from "@/components/sections/Testimonials";

export const metadata = {
  title: "Clients Praise",
  description: "Read what our clients have to say about Vision Security Recruitment Services. Trusted by London's best venues, events, and corporations.",
  openGraph: {
    title: "Clients Praise | Vision Security Recruitment Services Ltd",
    description: "Read what our clients have to say about Vision Security Recruitment Services. Trusted by London's best venues, events, and corporations.",
    url: "https://vsrs.co.uk/testimonials",
    images: [
      {
        url: "https://vsrs.co.uk/images/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "VSRS Testimonials",
      }
    ],
  },
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* PAGE HEADER */}
      <section className="bg-navy text-white pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Clients Praise</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We let our service speak for itself. Here is what leading businesses and private clients have to say about the uncompromising standards and elite personnel provided by VSRS.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS COMPONENT */}
      <div className="flex-1 py-12">
        <TestimonialsSection />
      </div>
    </div>
  );
}
