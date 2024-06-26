import { Component as ComponentProps } from "@/core/domain/models/Component";
import { ComponentsIndex } from "./utils";
import React, { useMemo } from "react";

export default function Renderer(props: ComponentProps) {
  // @ts-ignore
  const item: JSX.Element = ComponentsIndex[props.seed][props.tag];
  if (props.children.length > 0) {
    return React.cloneElement(item, {
      ...props.props,
      children: props.children.map((component) => <Renderer {...component} />),
    });
  } else {
    return React.cloneElement(item, {
      ...props.props,
      children: props?.props?.content,
    });
  }
}
