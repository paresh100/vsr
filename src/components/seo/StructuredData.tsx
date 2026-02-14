export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SecurityService",
        "name": "Vision Security Recruitment Services Ltd",
        "alternateName": "VSRS",
        "image": "https://vsrs.co.uk/images/hero-image-man-image.png",
        "description": "Premium security services in London. Specializing in corporate security, event security, and close protection.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "71-75 Shelton Street, Covent Garden",
            "addressLocality": "London",
            "postalCode": "WC2H 9JQ",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.514,
            "longitude": -0.123
        },
        "url": "https://vsrs.co.uk",
        "telephone": "+442085602309",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "sameAs": [
            "https://www.linkedin.com/company/vision-security-recruitment-services-ltd"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
