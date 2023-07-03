import { siteConfig } from "@/config/site";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import SlideNav from "@/components/slide-nav";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col">
          <SiteHeader />
          <div className="flex grow bg-[#F9F9F9]">
            <SlideNav />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
