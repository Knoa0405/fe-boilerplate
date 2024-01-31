import type { Metadata } from "next";
import '../styles/global.css';

export const metadata: Metadata = {
  title: "FE Boilerplate",
  description: "Frontend Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
