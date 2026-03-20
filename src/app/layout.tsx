import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asep Panji Lesmana | Kepala Sekolah SMAN 10 Depok",
  description: "Website pribadi dan portofolio profesional Asep Panji Lesmana, Kepala Sekolah SMAN 10 Depok. Refleksi, pemikiran, dan dedikasi untuk pendidikan yang bermakna.",
  keywords: ["Asep Panji Lesmana", "SMAN 10 Depok", "Kepala Sekolah", "Pendidikan", "Kepemimpinan", "Pendidikan Indonesia"],
  authors: [{ name: "Asep Panji Lesmana" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Asep Panji Lesmana | Kepala Sekolah SMAN 10 Depok",
    description: "Refleksi, pemikiran, dan dedikasi untuk pendidikan yang bermakna",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
