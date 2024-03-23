import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/Style/tailwind.css'
import '@/Style/Style.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Fest",
  description: "AKIT prasent by Techfest 2k24 ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>

    </html>
  );


}
