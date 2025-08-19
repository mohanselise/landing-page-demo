import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SELISE Signature - Stop chasing signatures. Start closing deals.",
  description: "Turn contracts into cash flow in seconds. Drag & drop your first document right here to start—no credit card needed, unlimited e‑signatures free forever.",
  keywords: "e-signature, digital signature, document signing, PDF signature, contract signing, electronic signature, free e-signatures, startup tools",
  authors: [{ name: "SELISE" }],
  creator: "SELISE",
  publisher: "SELISE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://signature.selise.ch'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SELISE Signature - Stop chasing signatures. Start closing deals.",
    description: "Turn contracts into cash flow in seconds. Free forever with effortless upgrades.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SELISE Signature",
  },
  twitter: {
    card: "summary_large_image",
    title: "SELISE Signature - Stop chasing signatures. Start closing deals.",
    description: "Turn contracts into cash flow in seconds. Free forever with effortless upgrades.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
