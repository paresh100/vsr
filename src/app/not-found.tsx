import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50">
            <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">The page you are looking for does not exist or has been moved.</p>
            <Link
                href="/"
                className="bg-navy text-white px-8 py-3 rounded-sm font-bold hover:bg-gold hover:text-navy transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
