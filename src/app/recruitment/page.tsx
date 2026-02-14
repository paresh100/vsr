import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Recruitment - Join the Team | Vision Security Recruitment Services Ltd',
    description: 'Join London’s elite security team. We are always looking for professional, licensed security personnel.',
};

export default function RecruitmentPage() {
    return (
        <div className="bg-white">
            <section className="relative bg-navy text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/corporate image of group.png"
                        alt="Join VSRS Team"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/80" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the VSRS Team</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We are always looking for professional, disciplined, and ambitious individuals to join our ranks.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">Current Opportunities</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        At vision Security Recruitment Services Ltd, we pride ourselves on the quality of our staff. If you hold a valid SIA license and have a commitment to excellence, we want to hear from you.
                    </p>

                    <div className="bg-gray-50 border border-gold/20 p-8 rounded-sm mb-12">
                        <h3 className="text-xl font-bold text-navy mb-4">Requirements</h3>
                        <ul className="text-left max-w-md mx-auto space-y-3 text-gray-700 list-disc list-inside">
                            <li>Valid SIA License (Door Supervisor, Close Protection, or CCTV)</li>
                            <li>Right to work in the UK</li>
                            <li>Excellent communication skills</li>
                            <li>Professional appearance and demeanor</li>
                            <li>5-year checkable work history</li>
                        </ul>
                    </div>

                    <p className="text-lg text-gray-600 mb-6">
                        Please send your CV and Cover Letter to our recruitment team.
                    </p>

                    <a
                        href="mailto:jobs@vsrs4you.com"
                        className="inline-block bg-navy text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-gold hover:text-navy transition-colors"
                    >
                        Email CV to jobs@vsrs4you.com
                    </a>

                    <p className="mt-8 text-sm text-gray-500">
                        Note: We do not accept applications via phone. Only shortlisted candidates will be contacted.
                    </p>
                </div>
            </section>
        </div>
    );
}
