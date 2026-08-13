import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-ui",
});

export const metadata: Metadata = {
  title: "Irene — Portfolio",
  description: "Web development, graphic design, and 3D art.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Favicon (SVG preferred) */}
        <link rel="icon" href="/favicon.svg" />
        {/* Fallback for older browsers */}
        <link rel="alternate icon" href="/favicon.ico" />
        {/* Theme color for supported browsers */}
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${display.variable} ${body.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
