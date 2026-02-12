import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';
import { cn } from '@/lib/utils';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: 'Service Not Found | VSRS',
        };
    }

    return {
        title: `${service.title} | Vision Security Recruitment Services Ltd`,
        description: service.description,
        openGraph: {
            title: service.title,
            description: service.description,
            url: `https://vsrs.co.uk/${slug}`,
            type: 'article',
        },
    };
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-white">
            {/* Hero Header */}
            <section className="bg-navy text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-gray-400 hover:text-gold mb-8 transition-colors text-sm uppercase tracking-wide"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{service.description}</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Content Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {service.content.map((paragraph, idx) => (
                                <p key={idx} className="text-lg text-gray-600 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}

                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm mt-8">
                                <h3 className="text-2xl font-bold text-navy mb-6">Key Benefits</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                                            <span className="text-gray-700 font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-navy p-8 rounded-sm text-white sticky top-24">
                                <h3 className="text-2xl font-bold text-white mb-4">Secure Your Assets</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Contact VSRS today to discuss your {service.title.toLowerCase()} requirements. We offer competitive rates tailored to your specific needs.
                                </p>
                                <div className="space-y-4">
                                    <Link
                                        href="/contact"
                                        className="block w-full text-center bg-gold text-navy font-bold py-3 rounded-sm hover:bg-white transition-colors"
                                    >
                                        Request a Quote
                                    </Link>
                                    <Link
                                        href="tel:02085602309"
                                        className="block w-full text-center border border-white/30 text-white font-semibold py-3 rounded-sm hover:bg-white/10 transition-colors"
                                    >
                                        Call 020 8560 2309
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Service Navigation */}
            <section className="bg-gray-50 py-16 border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold text-navy mb-8 text-center">Other Security Services</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {Object.keys(servicesData).filter(s => s !== slug).slice(0, 5).map((s) => (
                            <Link
                                key={s}
                                href={`/${s}`}
                                className="bg-white border border-gray-200 px-4 py-2 rounded-sm text-sm text-gray-600 hover:border-gold hover:text-navy transition-all"
                            >
                                {servicesData[s].title.replace(" London", "")}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
