import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/navbar'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hamza Siddiqui",
  description: "Solutions to your problems.",
  icons: {
    icon: '/favicon.ico', // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.jpeg" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-[100%] overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

