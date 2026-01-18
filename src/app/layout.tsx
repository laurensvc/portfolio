import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Professional portfolio showcasing my work experience, projects, and skills as a full stack developer. Explore my journey and get in touch for opportunities.",
  keywords: ["portfolio", "developer", "full stack", "web development", "software engineer"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Full Stack Developer",
    description: "Professional portfolio showcasing my work experience, projects, and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
