"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Recruitment', href: '/recruitment' },
    { name: 'Contact', href: '/contact' },
];

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors uppercase tracking-wide relative group",
                                        isActive ? "text-gold font-bold" : "text-navy hover:text-gold"
                                    )}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold animate-in fade-in zoom-in duration-300" />
                                    )}
                                    {!isActive && (
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                                    )}
                                </Link>
                            );
                        })}
                        <Link
                            href="tel:02085602309"
                            className="hidden lg:flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-sm hover:bg-gold transition-colors text-sm font-semibold"
                        >
                            <Phone className="w-4 h-4" />
                            <span>020 8560 2309</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-navy"
                        aria-label="Open mobile menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "block text-sm font-medium uppercase tracking-wide py-2",
                                        isActive ? "text-gold font-bold" : "text-navy"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}
