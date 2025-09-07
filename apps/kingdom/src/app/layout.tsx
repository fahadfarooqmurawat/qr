import "@workspace/ui/globals.css";
import { Providers } from "@/src/components/providers";
import { Metadata } from "next";
import { MedievalSharp } from "next/font/google";

const medievalSharp = MedievalSharp({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR Kingdom",
  icons: {
    icon: "/favicon.png", // explicitly set favicon.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={medievalSharp.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
