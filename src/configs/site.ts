import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/people/RZ-Clean/61556268283106/',
    twitter: 'https://twitter.com/rzclean_au',
    instagram: 'https://instagram.com/rzclean_au',
    pinterest: 'https://www.pinterest.com.au/rzclean_au',
    linkin: 'https://www.linkedin.com/company/rzclean/',
    youtube: 'https://www.youtube.com/channel/UCBNVu3ROfR33-6MfIkOXa9Q',
    googlemap: '',
    trustpilot: 'https://au.trustpilot.com/review/rzclean.com.au',

    buynsw: '',
    yelp: '',

    bondtoclean: 'https://bondtoclean.com.au/bond-cleaning-sydney',
    majormaid: 'https://majormaid.com.au/house-cleaner-sydney',
    rzcleaning: 'https://rzcleaning.com.au/bond-cleaning-perth',
    azcleaning: 'https://azcleaning.com.au/bond-cleaning-canberra',
    coastmaid: 'https://coastmaid.com.au',
};

export const siteConfig = {
    logo: 'RZClean',
    name: 'RZClean',
    title: ``,
    description: '',
    url: 'https://rzclean.com.au',
    ogImage: 'https://rzclean.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Locations',
            items: [
                {
                    title: 'Sydney',
                    href: '/commercial-cleaning-sydney',
                },
                {
                    title: 'Melbourne',
                    href: '/commercial-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Our Services',
            items: [
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Medical Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Childcare Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'School Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Gym Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Church Cleaning',
                    href: '/church-cleaning',
                },
                {
                    title: 'Club Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Supermarket Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Restaurant Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Hotel Cleaning',
                    href: '/hotel-cleaning',
                },
            ],
        },
        {
            title: 'About Us',
            href: '/about-us',
        },
        {
            title: 'Contact Us',
            href: '/contact-us',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Locations',
            items: [
                {
                    title: 'Sydney',
                    href: '/commercial-cleaning-sydney',
                },
                {
                    title: 'Melbourne',
                    href: '/commercial-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Office Cleaning',
            items: [
                {
                    title: 'Office Cleaning Sydney',
                    href: '/office-cleaning-sydney',
                },
                {
                    title: 'Office Cleaning Melbourne',
                    href: '/office-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Strata Cleaning',
            items: [
                {
                    title: 'Strata Cleaning Sydney',
                    href: '/strata-cleaning-sydney',
                },
                {
                    title: 'Strata Cleaning Melbourne',
                    href: '/strata-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Medical Cleaning',
            items: [
                {
                    title: 'Medical Cleaning Sydney',
                    href: '/medical-cleaning-sydney',
                },
                {
                    title: 'Medical Cleaning Melbourne',
                    href: '/medical-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Gym Cleaning',
            items: [
                {
                    title: 'Gym Cleaning Sydney',
                    href: '/gym-cleaning-sydney',
                },
                {
                    title: 'Gym Cleaning Melbourne',
                    href: '/gym-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Childcare Cleaning',
            items: [
                {
                    title: 'Childcare Cleaning Sydney',
                    href: '/childcare-cleaning-sydney',
                },
                {
                    title: 'Childcare Cleaning Melbourne',
                    href: '/childcare-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Hotel Cleaning',
            items: [
                {
                    title: 'Hotel Cleaning Sydney',
                    href: '/hotel-cleaning-sydney',
                },
                {
                    title: 'Hotel Cleaning Melbourne',
                    href: '/hotel-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'School Cleaning',
            items: [
                {
                    title: 'School Cleaning Sydney',
                    href: '/school-cleaning-sydney',
                },
                {
                    title: 'School Cleaning Melbourne',
                    href: '/school-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Warehouse Cleaning',
            items: [
                {
                    title: 'Warehouse Cleaning Sydney',
                    href: '/warehouse-cleaning-sydney',
                },
                {
                    title: 'Warehouse Cleaning Melbourne',
                    href: '/warehouse-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Church Cleaning',
            items: [
                {
                    title: 'Church Cleaning Sydney',
                    href: '/church-cleaning-sydney',
                },
                {
                    title: 'Church Cleaning Melbourne',
                    href: '/church-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Club Cleaning',
            items: [
                {
                    title: 'Club Cleaning Sydney',
                    href: '/club-cleaning-sydney',
                },
                {
                    title: 'Club Cleaning Melbourne',
                    href: '/club-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Supermarket Cleaning',
            items: [
                {
                    title: 'Supermarket Cleaning Sydney',
                    href: '/supermarket-cleaning-sydney',
                },
                {
                    title: 'Supermarket Cleaning Melbourne',
                    href: '/supermarket-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Restaurant Cleaning',
            items: [
                {
                    title: 'Restaurant Cleaning Sydney',
                    href: '/restaurant-cleaning-sydney',
                },
                {
                    title: 'Restaurant Cleaning Melbourne',
                    href: '/restaurant-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Showroom Cleaning',
            items: [
                {
                    title: 'Showroom Cleaning Sydney',
                    href: '/showroom-cleaning-sydney',
                },
                {
                    title: 'Showroom Cleaning Melbourne',
                    href: '/showroom-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Age Care Cleaning',
            items: [
                {
                    title: 'Aged Care Cleaning Sydney',
                    href: '/aged-care-cleaning-sydney',
                },
                {
                    title: 'Aged Care Cleaning Melbourne',
                    href: '/aged-care-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Userful Links',
            items: [
                {
                    title: 'Blog',
                    href: '/blog',
                },
                {
                    title: 'FAQs',
                    href: '/frequently-asked-questions',
                },
                {
                    title: 'Contact Us',
                    href: '/contact-us',
                },
                {
                    title: 'About Us',
                    href: '/about-us',
                },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@rzclean.com.au',
        phone: '1300 245 417',
        address: '402/249 George St, 2017 NSW',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 727,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
