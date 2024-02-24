import { Section as SectionProps } from "@/core/domain/models/Section";
import s from "./Section.module.scss";
import Component from "../Component";
import { useMemo } from "react";

export default function Section(props: SectionProps) {
  const RenderComponents = useMemo(
    () =>
      props.components.map((component) => (
        <Component key={component?.id} {...component} />
      )),
    [props]
  );
  return (
    <section className={s["ds-section"]}>
      <h4>{props.title}</h4>
      <div key={props.id} className={s["ds-section__grid"]}>
        {RenderComponents}
      </div>
    </section>
  );
}
