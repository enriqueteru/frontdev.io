import "@/styles/globals.css";
import { Inter } from "next/font/google";
import style from "@/styles/page.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FrontDev.io",
  description: "Desarrollamos experiencias de usuarios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={style.html} lang="es">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
