import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { BuildCursor } from "@/components/ui/BuildCursor";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f6f7fb',
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"]
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zyluxsolutions.com"),
  title: {
    default: "Zylux Software Solutions — Web Development, Software & Digital Marketing",
    template: "%s | Zylux Software Solutions"
  },
  description:
    "Zylux Software Solutions builds custom web platforms, bespoke software systems, mobile applications, graphic design, social media management, and SEO using latest technologies and unique designs.",
  keywords: [
    "Zylux Software Solutions",
    "Web Development",
    "Software Development",
    "Mobile App Development",
    "Graphic Design",
    "Social Media Management",
    "SEO Services",
    "Next.js Development",
    "React",
    "TypeScript",
    "Python",
    "Digital Marketing Partner"
  ],
  authors: [{ name: "Zylux Software Solutions" }],
  creator: "Zylux Software Solutions",
  publisher: "Zylux Software Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: [
      { url: '/assets/logo-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo-icon.png', sizes: '64x64', type: 'image/png' }
    ],
    apple: [
      { url: '/assets/logo-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zyluxsolutions.com",
    title: "Zylux Software Solutions — Web, Software, Graphic Design & SEO",
    description:
      "Custom web platforms, bespoke software systems, mobile apps, graphic design, and digital marketing tailored to your requirements with our expert suggestions.",
    siteName: "Zylux Software Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zylux Software Solutions — We Build. We Solve. We Deliver."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zylux Software Solutions — Web, Software, Graphic Design & SEO",
    description:
      "Custom web platforms, bespoke software systems, mobile apps, graphic design, and digital marketing tailored to your requirements with our expert suggestions.",
    images: ["/og-image.png"],
    creator: "@zyluxsolutions"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zyluxsolutions.com/#organization",
      name: "Zylux Software Solutions",
      url: "https://zyluxsolutions.com",
      logo: "https://zyluxsolutions.com/assets/logo.png",
      description:
        "Zylux Software Solutions delivers custom web development, bespoke software systems, mobile apps, graphic design, social media management, and SEO using latest technologies and unique designs.",
      email: "dkalharafernando@gmail.com",
      telephone: "+94756388329",
      sameAs: [
        "https://web.facebook.com/profile.php?id=61585045107718",
        "https://www.linkedin.com/company/zylux-software-solutions",
        "https://wa.me/94756388329"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Engineering, Design & Digital Marketing",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development & Platforms"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Systems & APIs"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Graphic Design & Brand Identity"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Management & SEO"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://zyluxsolutions.com/#website",
      url: "https://zyluxsolutions.com",
      name: "Zylux Software Solutions",
      publisher: {
        "@id": "https://zyluxsolutions.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} light scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f6f7fb] text-[#121118] font-sans antialiased flex flex-col selection:bg-[#f02a8f]/30 selection:text-[#121118] w-full overflow-x-hidden">
        <BuildCursor />
        <Navbar />
        <main className="flex-grow pt-20 sm:pt-24 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
