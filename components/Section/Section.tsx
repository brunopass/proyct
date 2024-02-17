import { Section as SectionProps } from "@/core/domain/models/Section";
import s from "./Section.module.scss";
import Component from "../Component";

export default function Section(props: SectionProps) {
  return (
    <section className={s["ds-section"]}>
      <h4>{props.title}</h4>
      <div className={s["ds-section__grid"]}>
        {props.components.map((component) => (
          <Component key={component?.id} {...component} />
        ))}
      </div>
    </section>
  );
}
