import Renderer from "../Renderer/Renderer";
import s from "./Component.module.scss";
import { Component as ComponentProps } from "@/core/domain/models/Component";

export default function Component(props: ComponentProps) {
  if (!props.id) {
    return null;
  }
  return (
    <div className={s["ds-component"]}>
      <div
        className={s["ds-component__preview"]}
        onMouseOver={(e) => e.stopPropagation()}
      >
        <Renderer {...props} />
      </div>

      <label>{props?.name}</label>
    </div>
  );
}
