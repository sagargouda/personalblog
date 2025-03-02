import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "sagyr",
  description: "my fuckups , my wins documented here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
