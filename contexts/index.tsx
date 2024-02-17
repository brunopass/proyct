import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { ComponentsProvider } from "./components.context";

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
      <ComponentsProvider>{props.children}</ComponentsProvider>
    </ConfigProvider>
  );
}
