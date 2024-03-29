import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Gym Cleaning Service In ${location}`,
        description: `From cardio machines to locker rooms, we clean it all! Reliable gym cleaning in ${location} for a top-to-bottom fresh feel. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
