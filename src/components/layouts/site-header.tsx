import Link from 'next/link';
import React from 'react';
import MobileNav from '@/components/layouts/mobile-nav';
import MainNav from '@/components/layouts/main-nav';
import { siteConfig } from '@/configs/site';
import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import { Icons } from '../icons';

interface SiteHeaderProps extends HTMLAttributes<HTMLElement> {}

const SiteHeader = ({ ...props }: SiteHeaderProps) => {
    return (
        <header
            className={cn(
                'w-full border-b sticky top-0 z-50 bg-background/90 backdrop-blur-lg backdrop-saturate-200',
                props.className
            )}
            {...props}
        >
            <nav className="flex container max-w-7xl w-full h-16 items-center justify-between sm:h-14">
                <div className="flex items-center gap-4 flex-1 sm:gap-8 sm:mr-6 md:flex-grow-0">
                    <MobileNav
                        mainNavItems={siteConfig.mainNav}
                        sidebarNavItems={siteConfig.mainNav}
                    />
                    <div className="relative">
                        <span className="text-lg font-extrabold italic text-primary text-nowrap">
                            {siteConfig.logo}
                        </span>
                        <Link
                            aria-label="Home"
                            href="/"
                            title={siteConfig.title}
                            className="inset-0 absolute"
                        >
                            <span className="sr-only">{siteConfig.title}</span>
                        </Link>
                    </div>
                </div>
                <nav className="flex lg:flex-1 gap-4 items-center justify-between">
                    <MainNav items={siteConfig.mainNav} />
                    <div className="gap-3 flex items-center sm:gap-4 md:gap-6">
                        <Link
                            className={cn(buttonVariants({}), '')}
                            href="/booking"
                        >
                            Get A Quote
                        </Link>
                        <Link
                            href="/cart"
                            className={cn(
                                buttonVariants({ variant: 'secondary' })
                            )}
                        >
                            <Icons.shoppingCart className="w-4 h-4" />
                        </Link>
                    </div>
                </nav>
            </nav>
        </header>
    );
};

SiteHeader.displayName = 'SiteHeader';

export { SiteHeader };
