import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Vision Security Recruitment Services Ltd',
};

export default function TermsPage() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-gray-700">
                <h1 className="text-4xl font-bold text-navy mb-8">Terms of Service</h1>
                <div className="prose prose-lg max-w-none">
                    <p>Please read these Terms of Service ("Terms") carefully before using the website operated by Vision Security Recruitment Services Ltd.</p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

                    <h3>2. Services</h3>
                    <p>All security services provided by VSRS are subject to a separate written contract and specific terms of engagement.</p>

                    <h3>3. Intellectual Property</h3>
                    <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Vision Security Recruitment Services Ltd and its licensors.</p>

                    <h3>4. Changes</h3>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>

                    <h3>5. Contact Us</h3>
                    <p>If you have any questions about these Terms, please contact us.</p>
                </div>
            </div>
        </div>
    );
}
