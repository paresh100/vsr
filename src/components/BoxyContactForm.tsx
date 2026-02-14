"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function BoxyContactForm() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('submitting');

        // Create FormData from the form element
        const formData = new FormData(e.currentTarget);

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });
            setFormState('success');
        } catch (error) {
            console.error('Form error:', error);
            setFormState('error');
        }
    };

    if (formState === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-navy border border-gold p-12 text-center"
            >
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center border border-gold">
                        <CheckCircle2 className="w-10 h-10 text-gold" />
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-wider">Message Received</h3>
                <p className="text-gray-300 text-lg">
                    Thank you for contacting VSRS. <br />
                    Our operations team will review your inquiry immediately.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy p-8 md:p-10 border-2 border-gold/20 relative overflow-hidden"
        >
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold" />

            <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold text-white uppercase tracking-[0.2em] mb-2">Secure Inquiry</h2>
                <div className="w-24 h-0.5 bg-gold mx-auto" />
            </div>

            <form
                name="vsrs-contact"
                method="POST"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <input type="hidden" name="form-name" value="vsrs-contact" />
                <p className="hidden">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="Full Name" name="name" required delay={0.1} />
                    <FormInput label="Company Name" name="company" delay={0.2} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="Email Address" name="email" type="email" required delay={0.3} />
                    <FormInput label="Phone Number" name="phone" type="tel" delay={0.4} />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <label className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">
                        Service Required
                    </label>
                    <div className="relative">
                        <select
                            name="service"
                            className="w-full bg-navy/50 border border-white/20 text-white px-4 py-4 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all appearance-none rounded-none"
                        >
                            <option value="corporate-security">Corporate Security</option>
                            <option value="event-security">Event Security</option>
                            <option value="construction-security">Construction Security</option>
                            <option value="retail-security">Retail Security</option>
                            <option value="close-protection">Close Protection</option>
                            <option value="other">Other / General Inquiry</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <label className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full bg-navy/50 border border-white/20 text-white px-4 py-4 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all rounded-none resize-none"
                    ></textarea>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-gold hover:bg-white text-navy font-black py-5 border-2 border-gold hover:border-white transition-all uppercase tracking-widest flex items-center justify-center gap-3 group"
                >
                    {formState === 'submitting' ? (
                        <span className="animate-pulse">Transmitting...</span>
                    ) : (
                        <>
                            DISPATCH MESSAGE
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
}

function FormInput({ label, name, type = "text", required = false, delay }: { label: string, name: string, type?: string, required?: boolean, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
        >
            <label htmlFor={name} className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                required={required}
                className="w-full bg-navy/50 border border-white/20 text-white px-4 py-4 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all rounded-none"
            />
        </motion.div>
    );
}
