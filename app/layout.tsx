import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import ThemeProvider from "./ThemeProvider";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Countries Explorer",
  description:
    "A comprehensive application to search and explore detailed information about countries across the globe.",
  openGraph: {
    title: "Countries Explorer",
    description:
      "A comprehensive application to search and explore detailed information about countries across the globe.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
