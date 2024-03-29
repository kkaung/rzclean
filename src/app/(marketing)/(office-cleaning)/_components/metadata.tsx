import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Office Cleaning Service In ${location}`,
        description: `Top rated office cleaning services in ${location} curated by the team that loves to clean. Book your office clean today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
