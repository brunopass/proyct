import { useState } from "react";
import Renderer from "../Renderer/Renderer";
import s from "./Component.module.scss";
import { Component as ComponentProps } from "@/core/domain/models/Component";
import { useBuilder } from "@/contexts/builder.context";

export default function Component(props: ComponentProps) {
  const { onDrag } = useBuilder();
  const [componentId, setComponentId] = useState(props.id);

  if (!props.id) {
    return null;
  }

  return (
    <div
      key={componentId}
      draggable
      onDragStart={() => {
        setComponentId(Date.now().toString());
        onDrag({ ...props });
      }}
    >
      <div key={props.id} className={s["ds-component"]}>
        <div
          key={props.id}
          className={s["ds-component__preview"]}
          onMouseOver={(e) => e.stopPropagation()}
        >
          <div>
            <Renderer key={props.id} {...props} />
          </div>
        </div>

        <label>{props?.name}</label>
      </div>
    </div>
  );
}
