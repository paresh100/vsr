import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <div className="bg-navy/5 p-6 rounded-full mb-6">
                <CheckCircle2 className="w-16 h-16 text-navy" />
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4">Thank You</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Your message has been received. A member of our team will contact you shortly to discuss your requirements.
            </p>
            <Link
                href="/"
                className="bg-navy text-white px-8 py-3 rounded-sm font-bold hover:bg-gold hover:text-navy transition-colors"
            >
                Return to Home
            </Link>
        </div>
    );
}
