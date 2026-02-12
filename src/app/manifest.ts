import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Vision Security Recruitment Services',
        short_name: 'VSRS',
        description: 'Premium Security Services in London Established 2016',
        start_url: '/',
        display: 'standalone',
        background_color: '#0E1A2B',
        theme_color: '#C8A24D',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
