import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { ComponentsProvider } from "./components.context";

import { ChakraBaseProvider, theme as chakraTheme } from "@chakra-ui/react";
import { PagesProvider } from "./pages.context";

export type ProvidersProps = { children: ReactNode };
export default function Providers(props: ProvidersProps) {
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
          <PagesProvider>{props.children}</PagesProvider>
        </ComponentsProvider>
      </ChakraBaseProvider>
    </ConfigProvider>
  );
}
