import "./globals.css";
import "@/public/static/fonts/style.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FooterMenu from "./components/menus/FooterMenu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Provider";
import Navbar from "./components/menus/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "공유 일기",
  description: "함께 쓰는 공유 일기장",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <FooterMenu />
        </AuthProvider>
      </body>
    </html>
  );
}
