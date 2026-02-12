import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
    title: 'Our Services | Vision Security Recruitment Services Ltd',
    description: 'Comprehensive security solutions including corporate, event, construction, and close protection services across London.',
};

export default function ServicesIndexPage() {
    return (
        <div className="bg-white">
            <section className="bg-navy text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Security Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        VSRS provides a full spectrum of security solutions, tailored to the unique demands of each sector.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(servicesData).map(([slug, service]) => (
                            <Link
                                key={slug}
                                href={`/${slug}`}
                                className="group block bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-gold transition-all"
                            >
                                <div className="bg-gray-50 p-8 h-full flex flex-col">
                                    <div className="bg-navy w-12 h-12 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                                        {service.title.replace(" London", "")}
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        {service.description}
                                    </p>
                                    <span className="text-navy font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Need a Tailored Solution?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        We understand that every client has unique requirements. Contact us to discuss a bespoke security strategy.
                    </p>
                    <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-colors inline-block">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
