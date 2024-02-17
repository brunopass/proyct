import "antd/dist/antd";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import type { AppProps } from "next/app";
import Providers from "@/contexts";

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Providers>
  );
}

export default appWithTranslation(App);
