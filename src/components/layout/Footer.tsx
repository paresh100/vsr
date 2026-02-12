import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-navy text-white pt-16 pb-8 border-t border-gold/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="bg-white p-4 w-fit rounded-sm">
                            <Image
                                src="/logo/IMG_0001.jpg"
                                alt="VSRS Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Vision Security Recruitment Services Ltd provides premium security solutions for corporate, industrial, and event sectors across London.
                        </p>
                        <div className="text-sm text-gold">
                            <p>Established 2016</p>
                            <p>Company No. 9959753</p>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
                        <address className="not-italic text-sm text-gray-300 space-y-3">
                            <p>Office 117, Unit 3 Woodward Buildings</p>
                            <p>1 Victoria Road, North Acton</p>
                            <p>London, W3 6FA</p>
                            <div className="pt-2 space-y-1">
                                <p><span className="text-white font-medium">T:</span> 020 8560 2309</p>
                                <p><span className="text-white font-medium">E:</span> admin@vsrs4you.com</p>
                            </div>
                        </address>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">Services</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/corporate-security-london" className="hover:text-gold transition-colors">Corporate Security</Link></li>
                            <li><Link href="/construction-site-security-london" className="hover:text-gold transition-colors">Construction Security</Link></li>
                            <li><Link href="/event-security-london" className="hover:text-gold transition-colors">Event Security</Link></li>
                            <li><Link href="/retail-security-london" className="hover:text-gold transition-colors">Retail Security</Link></li>
                            <li><Link href="/close-protection-london" className="hover:text-gold transition-colors">Close Protection</Link></li>
                            <li><Link href="/services" className="text-gold hover:underline mt-2 inline-block">View All Services</Link></li>
                        </ul>
                    </div>

                    {/* Legal/Links Column */}
                    <div>
                        <h3 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
                            <li><Link href="/recruitment" className="hover:text-gold transition-colors">Recruitment</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Vision Security Recruitment Services Ltd. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Registered in England & Wales.</p>
                </div>
            </div>
        </footer>
    );
}
