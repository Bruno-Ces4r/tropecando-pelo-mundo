import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guia do Nômade",
  description: "Guias de viagem econômica por país e cidade.",
};

// Root layout. The <html lang> is refined per-locale in app/[lang]/layout.tsx;
// this default keeps the root redirect page valid.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
