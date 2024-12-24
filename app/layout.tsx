import type {Metadata, Viewport} from "next";
import {Montserrat} from "next/font/google";
import "@/app/globals.css";
import HeaderComponent from "@/components/header-component";
import {ThemeProvider} from "next-themes";
import FooterComponent from "@/components/footer-component";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unicorns Group",
  description: "Unicorns Group Main Page"
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute={"class"} defaultTheme={"dark"} enableSystem disableTransitionOnChange>
          <HeaderComponent></HeaderComponent>
          {children}
          <FooterComponent></FooterComponent>
        </ThemeProvider>

      </body>
    </html>
  );
}
