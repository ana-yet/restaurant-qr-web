import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spice Garden - Authentic Bangladeshi Restaurant",
  description:
    "Experience the authentic flavors of Bangladesh at Spice Garden. Enjoy traditional kebabs, curries, and rice dishes in a warm, welcoming atmosphere.",
  keywords:
    "Bangladeshi restaurant, authentic cuisine, kebab, curry, rice dishes, halal food",
  openGraph: {
    title: "Spice Garden - Authentic Bangladeshi Restaurant",
    description:
      "Experience the authentic flavors of Bangladesh at Spice Garden.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
