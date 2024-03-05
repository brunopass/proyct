import s from "./Canva.module.scss";
import { Component as ComponentProps } from "@/core/domain/models/Component";
import { ComponentsIndex } from "./utils";
import React, { useMemo, useState } from "react";
import { useBuilder } from "@/contexts/builder.context";
import { useTool } from "@/contexts/tool.context";

export default function CanvaRenderer(props: ComponentProps) {
  const [selectable, setSelectable] = useState<boolean>(false);
  const [componentId, setComponentId] = useState(props.id);
  const { setCurrentBlockId } = useBuilder();
  const { selectComponent } = useTool();
  const RenderItem = useMemo(() => {
    //   @ts-ignore
    const item: JSX.Element = ComponentsIndex[props.seed][props.tag];

    if (props.children.length > 0) {
      return React.cloneElement(item, {
        ...props.props,
        children: props.children.map((component) => (
          <CanvaRenderer key={component?.id} {...component} />
        )),
      });
    } else {
      return React.cloneElement(item, {
        ...props.props,
        children: props?.props?.content,
      });
    }
  }, [props]);

  return (
    <div
      key={componentId}
      style={props.tag === "body" ? { width: "100%", minHeight: "100vh" } : {}}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        selectComponent(props);
      }}
      draggable
      onDragStart={() => {
        setComponentId(Date.now().toString());
        // onDrag({ ...props });
      }}
      onMouseOver={(e) => {
        e.stopPropagation();
        setSelectable(true);
        props.container && setCurrentBlockId(props.id);
      }}
      onMouseOut={(e) => {
        e.stopPropagation();
        setSelectable(false);
        props.container && setCurrentBlockId("");
      }}
      className={`${s["ds-canva-renderer"]} ${
        selectable ? s["ds-canva-renderer--selectable"] : ""
      }`}
    >
      {RenderItem}
    </div>
  );
}
