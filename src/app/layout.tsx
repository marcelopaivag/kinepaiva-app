import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinesiólogo Marcelo Paiva - Inicio",
  description: "Aliviando el dolor de las personas desde hace 10 años en Las Condes",
  keywords: "kinesiología, fisioterapia, osteopatía, rehabilitación, las condes, dolor, esguince, lumbalgia, ejercicio, deporte, salud, traumatología"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
