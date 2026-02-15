import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, HardHat, Store, Trophy, Landmark } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export const metadata: Metadata = {
    title: 'Industries We Serve | Vision Security Recruitment Services Ltd',
    description: 'Specialized security expertise for Corporate, Construction, Retail, Events, and Public sectors in London.',
};

export default function IndustriesPage() {
    const industries = [
        {
            title: "Corporate & Commercial",
            icon: Building2,
            desc: "Protecting offices, business parks, and corporate assets. Our officers act as professional front-of-house ambassadors while maintaining strict access control."
        },
        {
            title: "Construction & Development",
            icon: HardHat,
            desc: "Securing valuable equipment and ensuring site safety. We provide gatehouse management, perimeter patrols, and out-of-hours surveillance."
        },
        {
            title: "Luxury Retail",
            icon: Store,
            desc: "Discreet loss prevention and customer service for high-end boutiques and shopping districts. We protect stock while enhancing the shopping experience."
        },
        {
            title: "Events & Hospitality",
            icon: Trophy,
            desc: "From private parties to large public gatherings. We manage crowds, VIPs, and venue safety with a focus on guest experience."
        },
        {
            title: "Public Sector",
            icon: Landmark,
            desc: "Reliable security services for government buildings, healthcare facilities, and educational institutions."
        }
    ];

    return (
        <div className="bg-white">
            <section className="relative bg-navy text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/industries-banner-bg.png"
                        alt="Diverse Industries Security"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/80" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Sector-specific expertise honed since 2016. We understand the unique challenges of your industry.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {industries.map((ind, idx) => (
                            <div key={idx} className="relative h-full rounded-lg border-[0.75px] border-gray-200 p-2">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={2}
                                />
                                <div className="relative flex gap-6 bg-white p-8 rounded-md border-[0.75px] border-gray-100 h-full">
                                    <div className="bg-navy/5 p-4 rounded-sm h-fit shrink-0">
                                        <ind.icon className="w-8 h-8 text-navy" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-navy mb-3">{ind.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {ind.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
