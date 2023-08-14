import "./globals.css";
import "@/public/static/fonts/style.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/menus/Navbar";
import FooterMenu from "./components/menus/FooterMenu";
import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "공유 일기",
  description: "알아서들 일기 쓰십쇼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterMenu />
      </body>
    </html>
  );
}
