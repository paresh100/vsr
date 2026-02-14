import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Users, Clock, CheckCircle2 } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* HERO SECTION */}
      <section className="relative bg-navy text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Asset */}
        <div className="absolute inset-0 z-0">
          {/* 
            VIDEO BACKGROUND OPTION:
            To use a video, uncomment the block below and add your video file to public/videos/hero-bg.mp4
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
          */}

          {/* Fallback/Primary Image Background */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/london-skyline.png"
              alt="London Skyline at Night"
              fill
              className="object-cover opacity-30 animate-ken-burns"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Gold Accent Line */}
              <MotionWrapper delay={0.1}>
                <div className="w-20 h-1 bg-gold rounded-full" />
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  Professional <br />
                  Security <br />
                  Services Across <br />
                  <span className="text-white">London</span>
                </h1>
              </MotionWrapper>

              <MotionWrapper delay={0.3}>
                <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                  Vision Security Recruitment Services provides elite protection and tactical staffing for high-value assets, corporate entities, and premier events.
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-5 pt-6 relative z-10">
                  <Link
                    href="/services"
                    className="px-8 py-4 bg-navy text-white font-bold tracking-widest uppercase text-sm hover:bg-navy/90 border border-gold/30 hover:border-gold transition-all duration-300 text-center rounded-sm"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/industries"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold tracking-widest uppercase text-sm hover:bg-white/20 border border-white/30 hover:border-white transition-all duration-300 text-center rounded-sm"
                  >
                    Industries
                  </Link>
                </div>
              </MotionWrapper>
            </div>

            {/* Man Image Overlay */}
            <MotionWrapper delay={0.5} className="hidden lg:block relative h-[600px] w-full max-w-md mx-auto">
              <div className="h-full w-full rounded-2xl border-2 border-white/10 shadow-[0_0_60px_30px_rgba(200,162,77,0.5)] bg-gold/5 backdrop-blur-sm overflow-hidden">
                <Image
                  src="/images/hero-sia-image.PNG"
                  alt="Professional Security Guard"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </MotionWrapper>
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
              <MotionWrapper key={idx} delay={idx * 0.2}>
                <div className="relative h-full rounded-lg border-[0.75px] border-gray-200 p-2">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative flex h-full flex-col bg-gray-50 p-8 rounded-md border-[0.75px] border-gray-100 group">
                    <div className="bg-navy w-14 h-14 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <MotionWrapper>
              <div className="max-w-2xl">
                <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy">Comprehensive Security Solutions</h2>
              </div>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <Link href="/services" className="hidden md:flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors mt-4 md:mt-0">
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </MotionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              "Event Security", "Corporate Security", "Construction Site Security",
              "Retail Security", "Close Protection", "Door Supervisors",
              "CCTV Monitoring", "Industrial Security", "Dog Handlers",
              "Hospitality Security", "Private Event Security", "Security Guards"
            ].map((service, idx) => (
              <MotionWrapper key={idx} delay={idx * 0.05}>
                <div className="relative h-full rounded-lg border-[0.75px] border-gray-200 p-2">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <Link
                    href={`/${service.toLowerCase().replace(/ /g, '-')}-london`}
                    className="relative bg-white p-6 rounded-md border-[0.75px] border-gray-100 hover:shadow-md transition-all group block h-full flex items-center"
                  >
                    <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors flex justify-between items-center w-full">
                      {service}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </Link>
                </div>
              </MotionWrapper>
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
              <MotionWrapper>
                <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">Established 2016</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Trusted Partner for <br />London's Leading Sectors</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  From high-end corporate officers in North Acton to large-scale event security across the capital, VSRS brings a decade of expertise to every assignment. We understand the specific nuances of different industries.
                </p>
              </MotionWrapper>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Corporate Offices", "Construction & Development", "Luxury Retail", "Public & Private Events"].map((item, idx) => (
                  <MotionWrapper key={idx} delay={0.2 + idx * 0.1}>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                      <span className="font-medium">{item}</span>
                    </li>
                  </MotionWrapper>
                ))}
              </ul>

              <MotionWrapper delay={0.6}>
                <div className="mt-10">
                  <Link href="/about" className="text-gold font-semibold hover:text-white transition-colors border-b border-gold hover:border-white pb-1 inline-block">
                    Learn more about our company
                  </Link>
                </div>
              </MotionWrapper>
            </div>

            <MotionWrapper delay={0.3} className="relative h-[400px] lg:h-[500px]">
              <div className="h-full w-full rounded-sm overflow-hidden border-4 border-white/10">
                <Image
                  src="/images/corporate-image-of-group.jpg"
                  alt="VSRS Security Team"
                  fill
                  className="object-cover"
                />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper>
            <div className="bg-gray-100 rounded-lg p-8 md:p-16 text-center border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Secure Your Assets?</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
                Contact our team specifically for competitive rates available upon request. We provide tailored solutions for your specific security requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gold text-navy font-bold tracking-widest uppercase text-sm hover:bg-gold/90 transition-all duration-300 text-center rounded-sm"
                >
                  Get a Quote
                </Link>
                <Link
                  href="tel:02085602309"
                  className="px-8 py-4 bg-white text-navy font-bold tracking-widest uppercase text-sm hover:bg-gray-100 border border-navy transition-all duration-300 text-center rounded-sm"
                >
                  Call 020 8560 2309
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
