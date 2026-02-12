"use client";

import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MobileStickyCTA() {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 md:hidden flex gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
            <a
                href="tel:02085602309"
                className="flex-1 flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-sm font-bold text-sm uppercase tracking-wide active:scale-95 transition-transform"
                aria-label="Call VSRS"
            >
                <Phone className="w-4 h-4" />
                Call Now
            </a>
            <a
                href="mailto:admin@vsrs4you.com"
                className="flex-1 flex items-center justify-center gap-2 bg-gold text-navy py-3 rounded-sm font-bold text-sm uppercase tracking-wide active:scale-95 transition-transform"
                aria-label="Email VSRS"
            >
                <Mail className="w-4 h-4" />
                Email Us
            </a>
        </motion.div>
    );
}
