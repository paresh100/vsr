import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Vision Security Recruitment Services Ltd',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-gray-700">
                <h1 className="text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
                <div className="prose prose-lg max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>Vision Security Recruitment Services Ltd ("us", "we", or "our") operates the https://vsrs.co.uk website (the "Service").</p>

                    <h3>1. Information Collection</h3>
                    <p>We collect information you provide directly to us when you fill out a contact form, apply for a job, or communicate with us.</p>

                    <h3>2. Use of Information</h3>
                    <p>We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to process job applications.</p>

                    <h3>3. Data Protection</h3>
                    <p>We are committed to ensuring your information is secure. We have implemented suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>

                    <h3>4. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at admin@vsrs4you.com.</p>
                </div>
            </div>
        </div>
    );
}
