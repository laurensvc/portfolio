import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jouw Naam — Ontwikkelaar & Ontwerper",
  description: "Full-stack ontwikkelaar en ontwerper die uitzonderlijke digitale ervaringen creëert. Beschikbaar voor freelance en full-time mogelijkheden.",
  keywords: ["portfolio", "developer", "designer", "full stack", "web development", "software engineer", "UI/UX"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Jouw Naam — Ontwikkelaar & Ontwerper",
    description: "Full-stack ontwikkelaar en ontwerper die uitzonderlijke digitale ervaringen creëert",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="antialiased">
      <body className="font-display">
        {children}
      </body>
    </html>
  );
}
