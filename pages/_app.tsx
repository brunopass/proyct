import "antd/dist/antd";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ChakraBaseProvider, theme as chakraTheme } from "@chakra-ui/react";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { ComponentsProvider } from "@/contexts/components.context";
import { PagesProvider } from "@/contexts/pages.context";
import { BuilderProvider } from "@/contexts/builder.context";

function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6172f3",
          borderRadius: 6,
          borderRadiusSM: 6,
          borderRadiusXS: 4,
          borderRadiusLG: 8,
          borderRadiusOuter: 10,
          motion: false,
        },
      }}
    >
      <ChakraBaseProvider theme={chakraTheme}>
        <ComponentsProvider>
          <PagesProvider>
            <BuilderProvider>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </BuilderProvider>
          </PagesProvider>
        </ComponentsProvider>
      </ChakraBaseProvider>
    </ConfigProvider>
  );
}

export default appWithTranslation(App);
