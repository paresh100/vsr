import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, Phone } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Recruitment', href: '/recruitment' },
    { name: 'Contact', href: '/contact' },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            {/* 
                  Using a placeholder or looking for the actual logo file. 
                  Assuming public/logo/IMG_0001.jpg exists based on previous ls. 
                  Ideally we want a transparent PNG or SVG, but we have what we have. 
                  We will force a white background container if needed, but the header is white.
               */}
                            <div className="relative h-12 w-auto aspect-[3/1] min-w-[120px]">
                                {/* Fallback text if logo is missing or for SEO */}
                                <span className="sr-only">VSRS</span>
                                {/* We will try to load the logo, if not just text */}
                                <Image
                                    src="/logo/IMG_0001.jpg"
                                    alt="VSRS Logo"
                                    width={150}
                                    height={50}
                                    className="h-12 w-auto object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-navy hover:text-gold transition-colors uppercase tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="tel:02085602309"
                            className="hidden lg:flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-sm hover:bg-gold transition-colors text-sm font-semibold"
                        >
                            <Phone className="w-4 h-4" />
                            <span>020 8560 2309</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button - Placeholder for functionality */}
                    <button className="md:hidden p-2 text-navy">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
