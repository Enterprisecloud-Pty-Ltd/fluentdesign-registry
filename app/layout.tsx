import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FluentDesign Registry",
  description: "FluentDesign shadcn/ui registry for create-ec-app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
