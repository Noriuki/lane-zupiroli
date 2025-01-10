// Next
import { Metadata } from "next";
// Providers
import Providers from "./Providers";
// Components
import Footer from "@/components/Layout/Footer";
// Fonts
import { Poppins } from "next/font/google";
// Styles
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lane Zupiroli",
  description: "Full Stack Developer",
  icons: {
    icon: "/icons/app/favicon.png",
    apple: "/icons/app/favicon.png",
    shortcut: "/icons/app/favicon.png",
  },
};

const popping = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={popping.className}>
      <body className="bg-zinc-900">
        <div className="flex flex-wrap flex-col">
          <Providers>
            <main className="flex-1 flex flex-wrap">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
