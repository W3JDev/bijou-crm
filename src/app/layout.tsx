import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

/**
 * Inter — primary sans-serif for all UI text.
 * Bijou brand: Inter is locked per STRATEGY-2026-05-15.md.
 */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

/**
 * Crimson Pro — display serif for headings and marketing callouts.
 * Matches the drift-audit webpage and Bijou brand identity.
 */
const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Bijou — WhatsApp AI for SMEs",
    template: "%s — Bijou",
  },
  description:
    "Bijou is the WhatsApp AI for Malaysian and GCC SMEs — shared inbox, CRM, automations, and AI-powered replies in Manglish.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [{ url: "/icon" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d3d3d", // Bijou Deep Green
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${crimsonPro.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
        {/*
         * Toaster — Bijou Deep Green glass panel with Gold border.
         * Manglish copy lives in src/lib/toast.ts — use bijouToast.*
         * instead of calling sonner's toast() directly.
         */}
        <Toaster
          theme="dark"
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(13, 61, 61, 0.95)",
              border: "1px solid rgba(212, 175, 55, 0.25)",
              color: "#faf7f0",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
