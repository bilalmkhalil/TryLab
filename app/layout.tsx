import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TryLab",
  description:
    "TryLab is my personal testing ground for experimenting with new libraries and technologies. Here, I explore and understand tools before applying them to real projects. This space allows me to thoroughly test and refine these libraries, ensuring I'm well-prepared to integrate them into my future work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
