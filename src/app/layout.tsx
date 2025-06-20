import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSized Papers",
  description: "A website dedicated to showcasing research papers, program documentation, and technical papers—written by Christian Mark P. Francisco—related to computer science.",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
