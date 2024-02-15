import "@/globals.css";

import { Inter } from "next/font/google";

import PropTypes from 'prop-types';

// -------------------------------------------------------

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "My Portfolio, developed by samidirig",
  keywords: "react,material,kit,application,dashboard,admin,template",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
  ],
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
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

RootLayout.propTypes = {
  children: PropTypes.node,
};
