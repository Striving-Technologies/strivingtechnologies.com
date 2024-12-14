import { GlobalProvider } from "@/context/global";
import SEO from "@/next-seo.config";
import "@/styles/globals.scss";
import "aos/dist/aos.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}
