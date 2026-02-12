import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Vision Security Recruitment Services Ltd',
    description: 'Contact VSRS for premium security solutions in London. 020 8560 2309 | admin@vsrs4you.com',
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-navy text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact VSRS</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Get in touch to discuss your security requirements. We operate 24/7 across London.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-navy/5 p-3 rounded-sm">
                                        <MapPin className="w-6 h-6 text-navy" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy mb-1">Head Office</h3>
                                        <address className="not-italic text-gray-600">
                                            Office 117, Unit 3 Woodward Buildings<br />
                                            1 Victoria Road, North Acton<br />
                                            London, W3 6FA
                                        </address>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-navy/5 p-3 rounded-sm">
                                        <Phone className="w-6 h-6 text-navy" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy mb-1">Phone</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:02085602309" className="hover:text-gold transition-colors">020 8560 2309</a>
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent inquiries.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-navy/5 p-3 rounded-sm">
                                        <Mail className="w-6 h-6 text-navy" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy mb-1">Email</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:admin@vsrs4you.com" className="hover:text-gold transition-colors">admin@vsrs4you.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-navy/5 p-3 rounded-sm">
                                        <Clock className="w-6 h-6 text-navy" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy mb-1">Business Hours</h3>
                                        <p className="text-gray-600">
                                            Administration: Mon-Fri, 9am - 5pm<br />
                                            Operations: 24/7/365
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.656565156643!2d-0.264660923055836!3d51.52049970849204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611a437145749%3A0x6a2c22c0d507340!2s1%20Victoria%20Rd%2C%20London%20W3%206FA%2C%20UK!5e0!3m2!1sen!2suk!4v1707760000000!5m2!1sen!2suk"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-sm shadow-sm"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
                            <form
                                name="vsrs-contact"
                                method="POST"
                                action="/thank-you"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                className="space-y-6"
                            >
                                <input type="hidden" name="form-name" value="vsrs-contact" />
                                <p className="hidden">
                                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                        <input type="text" name="company" id="company" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                                    <select name="service" id="service" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all">
                                        <option value="corporate-security">Corporate Security</option>
                                        <option value="event-security">Event Security</option>
                                        <option value="construction-security">Construction Security</option>
                                        <option value="retail-security">Retail Security</option>
                                        <option value="close-protection">Close Protection</option>
                                        <option value="other">Other / General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea name="message" id="message" rows={4} required className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-gold text-navy font-bold py-4 rounded-sm hover:bg-navy hover:text-white transition-colors uppercase tracking-wide">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
