'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for better UX on initial load
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="container mx-auto max-w-5xl">
                        <div className="bg-navy/95 backdrop-blur-md border border-gold/30 rounded-lg shadow-2xl p-6 md:flex md:items-center md:justify-between gap-6">

                            <div className="text-white mb-6 md:mb-0">
                                <h3 className="text-lg font-bold text-gold mb-2">We value your privacy</h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                    <Link href="/privacy-policy" className="text-white underline hover:text-gold ml-1 transition-colors">
                                        Read our Privacy Policy
                                    </Link>.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                                <button
                                    onClick={handleDecline}
                                    className="px-6 py-2.5 rounded-sm border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-colors text-sm font-semibold"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-2.5 rounded-sm bg-gold text-navy hover:bg-white transition-colors text-sm font-bold shadow-lg"
                                >
                                    Accept All
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
