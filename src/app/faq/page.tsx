import type { Metadata } from 'next';
import Image from 'next/image';
import FAQ from '@/components/sections/FAQ';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Vision Security Recruitment Services Ltd',
    description: 'Common questions about our security services, licensing, coverage areas, and deployment times.',
};

export default function FAQPage() {
    return (
        <div className="bg-white">
            <div className="relative bg-navy text-white py-24 text-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/faq-banner-bg.png"
                        alt="London Skyline Security"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Centre</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Find answers to common questions about our security services and operations.
                    </p>
                </div>
            </div>

            <FAQ />
        </div>
    );
}
