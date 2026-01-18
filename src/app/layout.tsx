import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Your Name — Developer & Designer",
  description: "Full-stack developer and designer crafting exceptional digital experiences. Available for freelance and full-time opportunities.",
  keywords: ["portfolio", "developer", "designer", "full stack", "web development", "software engineer", "UI/UX"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Developer & Designer",
    description: "Full-stack developer and designer crafting exceptional digital experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-display">
        {children}
      </body>
    </html>
  );
}
