import { Component as ComponentProps } from "@/core/domain/models/Component";
import { ComponentsIndex } from "./utils";
import React, { ReactNode, useMemo } from "react";

export default function Renderer(props: ComponentProps) {
  const RenderItem = useMemo(() => {
    //   @ts-ignore
    const item: JSX.Element = ComponentsIndex[props.seed][props.tag];
    if (props.children.length > 0) {
      return React.cloneElement(item, {
        ...props.props,
        children: props.children.map((component) => (
          <Renderer {...component} />
        )),
      });
    }
    if (typeof props?.props?.content === "string") {
      return React.cloneElement(item, {
        ...props.props,
        children: props?.props?.content,
      });
    } else {
      return item;
    }
  }, [props]);
  return <div>{RenderItem}</div>;
}
