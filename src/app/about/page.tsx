import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | Vision Security Recruitment Services Ltd',
    description: 'Established 2016. A trusted provider of professional security services in London with a focus on corporate, event, and industrial sectors.',
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative bg-navy text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/corporate-image-of-group.png"
                        alt="VSRS Security Team"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/80" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About VSRS</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Established in 2016, Vision Security Recruitment Services Ltd has grown into one of London's most respected boutique security providers.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <h2 className="text-3xl font-bold text-navy mb-4">Our History & Mission</h2>
                            <p>
                                Founded in 2016 and based in North Acton, London, VSRS was built on a simple premise: to provide security services that are as professional and presentable as the corporate clients we serve.
                            </p>
                            <p>
                                We moved away from the "muscle" stereotype of the security industry, focusing instead on intelligence, diplomacy, and customer service. Our personnel are not just guards; they are ambassadors for your brand, trained to handle complex situations with discretion and authority.
                            </p>
                            <p>
                                Over the years, we have secured high-profile corporate offices, large-scale construction developments, and exclusive private events across the capital. Our growth is a testament to our reliability and the trust our clients place in us.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                                <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-gold">
                                    <span className="block text-3xl font-bold text-navy mb-1">2016</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wide">Established</span>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-gold">
                                    <span className="block text-3xl font-bold text-navy mb-1">100%</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wide">Client Retention Focus</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-lg">
                            <Image
                                src="/images/professional-security-team-portrait.png"
                                alt="VSRS Team"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Integrity",
                                desc: "We operate with total transparency. From our pricing to our reporting, you will always know exactly what you are getting."
                            },
                            {
                                title: "Professionalism",
                                desc: " appearance and conduct matter. Our staff are impeccably turned out and trained in corporate etiquette."
                            },
                            {
                                title: "Vigilance",
                                desc: "We are proactive, not reactive. Our teams are trained to identify and neutralize threats before they become incidents."
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                                <CheckCircle2 className="w-10 h-10 text-gold mb-6" />
                                <h3 className="text-xl font-bold text-navy mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
