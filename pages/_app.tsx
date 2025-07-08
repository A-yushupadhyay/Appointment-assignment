// pages/_app.tsx
import "@/styles/globals.css"; // ✅ Load Tailwind + fonts


import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
