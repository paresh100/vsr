import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Users, Clock, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* HERO SECTION */}
      <section className="relative bg-navy text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero image man image.png"
            alt="Professional Security Personnel"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Premium Corporate <br />
              <span className="text-gold">Security Standards</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Vision Security Recruitment Services Ltd delivers authoritative, discreet, and reliable security solutions for London’s corporate and event sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-gold text-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-navy transition-all flex items-center justify-center gap-2 group"
              >
                Request a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VSRS - 3 PILLARS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">Our Ethos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Why Choose VSRS?</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Established in 2016, we have built a reputation on three core pillars that define every operation we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Uncompromising Standards",
                desc: "We adhere to strict operational protocols. Our staff are vetted, trained, and managed to exceed industry benchmarks."
              },
              {
                icon: Users,
                title: "Elite Personnel",
                desc: "Our recruitment process is rigorous. We provide personnel who are not just licensed, but professional ambassadors for your brand."
              },
              {
                icon: Clock,
                title: "Reliability Focus",
                desc: "24/7 operational support and contingency planning mean we deliver consistency when it matters most."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-sm border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all group">
                <div className="bg-navy w-14 h-14 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Comprehensive Security Solutions</h2>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors mt-4 md:mt-0">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              "Event Security", "Corporate Security", "Construction Site Security",
              "Retail Security", "Close Protection", "Door Supervisors",
              "CCTV Monitoring", "Industrial Security", "Dog Handlers",
              "Hospitality Security", "Private Event Security", "Security Guards"
            ].map((service, idx) => (
              <Link
                key={idx}
                href={`/${service.toLowerCase().replace(/ /g, '-')}-london`}
                className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-all border-l-4 border-transparent hover:border-gold group"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors flex justify-between items-center">
                  {service}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES / TRUST */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">Established 2016</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Trusted Partner for <br />London's Leading Sectors</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                From high-end corporate officers in North Acton to large-scale event security across the capital, VSRS brings a decade of expertise to every assignment. We understand the specific nuances of different industries.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Corporate Offices", "Construction & Development", "Luxury Retail", "Public & Private Events"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/about" className="text-gold font-semibold hover:text-white transition-colors border-b border-gold hover:border-white pb-1 inline-block">
                  Learn more about our company
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden border-4 border-white/10">
              <Image
                src="/images/corporate image of group.png"
                alt="VSRS Security Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg p-8 md:p-16 text-center border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Secure Your Assets?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
              Contact our team specifically for competitive rates available upon request. We provide tailored solutions for your specific security requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-navy text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-gold hover:text-navy transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="tel:02085602309"
                className="border border-navy text-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-navy hover:text-white transition-colors"
              >
                Call 020 8560 2309
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
