import type { Metadata } from "next";
import Header from "@/components/layout/header";  // Import Header component
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* The Header is now part of the layout, rendering on all pages */}
        <Header />
        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
