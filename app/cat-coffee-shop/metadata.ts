import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Cat Coffee Shop Ultimate Idle Management Guide | ${siteConfig.domain}`,
  description: "Maximize your earnings and efficiency in Cat Coffee Shop with this comprehensive strategy guide. Learn how to run the best cat café in town!",
  alternates: { canonical: 'https://www.cozygame.net/cat-coffee-shop' },
  openGraph: {
    title: "Cat Coffee Shop Ultimate Idle Management Guide",
    description: "Maximize your earnings and efficiency in Cat Coffee Shop with this comprehensive strategy guide. Learn how to run the best cat café in town!",
    url: 'https://www.cozygame.net/cat-coffee-shop',
    siteName: 'Cozy Games',
    images: [{ url: '/assets/cat-coffee-shop/Cat-Coffee-Shop.png', width: 1200, height: 630, alt: 'Cat Coffee Shop Strategy Guide' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cat Coffee Shop Ultimate Idle Management Guide",
    description: "Maximize your earnings and efficiency in Cat Coffee Shop with this comprehensive strategy guide.",
    images: ['/assets/cat-coffee-shop/Cat-Coffee-Shop.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
