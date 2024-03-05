import { Component } from "@/core/domain/models/Component";
import { ReactNode, createContext, useContext, useState } from "react";

export type ToolContextProps = {
  selectComponent: (component: Component) => void;
  selectedComponent: Component | null;
};
export const ToolContext = createContext<ToolContextProps>(
  // @ts-ignore
  {}
);
export type ToolProviderProps = {
  children: ReactNode;
};
export const ToolProvider = (props: ToolProviderProps) => {
  const [component, setComponent] = useState<Component | null>(null);

  const selectComponent = (component: Component) => setComponent(component);

  const context = {
    selectComponent,
    selectedComponent: component,
  };

  return (
    <ToolContext.Provider value={context}>
      {props.children}
    </ToolContext.Provider>
  );
};

export const useTool = () => useContext(ToolContext);
