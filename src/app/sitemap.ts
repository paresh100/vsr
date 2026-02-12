import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vsrs.co.uk';

    // Core pages
    const routes = [
        '',
        '/about',
        '/services',
        '/recruitment',
        '/contact',
        '/privacy-policy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service specific pages (as seen in the grid)
    const services = [
        "event-security", "corporate-security", "construction-site-security",
        "retail-security", "close-protection", "door-supervisors",
        "cctv-monitoring", "industrial-security", "dog-handlers",
        "hospitality-security", "private-event-security", "security-guards"
    ].map((service) => ({
        url: `${baseUrl}/${service}-london`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...services];
}
