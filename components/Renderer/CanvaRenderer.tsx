import s from "./Canva.module.scss";
import { Component as ComponentProps } from "@/core/domain/models/Component";
import { ComponentsIndex } from "./utils";
import React, { useMemo } from "react";
import { PlusCircle } from "react-feather";
import { useBuilder } from "@/contexts/builder.context";

export default function CanvaRenderer(props: ComponentProps) {
  const { setCurrentBlockId, currentBlockId } = useBuilder();
  const RenderItem = useMemo(() => {
    //   @ts-ignore
    const item: JSX.Element = ComponentsIndex[props.seed][props.tag];

    if (props.children.length > 0) {
      return React.cloneElement(item, {
        ...props.props,
        children: props.children.map((component) => (
          <CanvaRenderer {...component} />
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
      key={props.id}
      style={props.tag === "body" ? { width: "100%", minHeight: "100vh" } : {}}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onMouseOver={(e) => {
        e.stopPropagation();
        console.log(props.id);
        setCurrentBlockId(props.id);
      }}
      className={s["ds-canva-renderer"]}
    >
      {currentBlockId === props.id && (
        <>
          <div
            className={`${s["ds-canva-renderer-add"]} ${s["ds-canva-renderer-add--1"]}`}
          ></div>
          <div
            className={`${s["ds-canva-renderer-add"]} ${s["ds-canva-renderer-add--2"]}`}
          ></div>

          <div
            className={`${s["ds-canva-renderer-add"]} ${s["ds-canva-renderer-add--3"]}`}
          ></div>
          <div
            className={`${s["ds-canva-renderer-add"]} ${s["ds-canva-renderer-add--4"]}`}
          ></div>
        </>
      )}
      {RenderItem}
    </div>
  );
}
