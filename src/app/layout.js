import { Inter } from "next/font/google";

import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Flower",
  description: "My Flower, developed by samidirig",
  keywords: 'react,material,kit,application,dashboard,admin,template',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
  ],
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
