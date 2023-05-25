import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

// other packages
import { AnimatePresence } from "framer-motion";

// definig fonts
const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fontPoppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
