import s from "./Page.module.scss";
import { ReactNode } from "react";

export type PageProps = {
  children: ReactNode;
};

export default function Page(props: PageProps) {
  return <section className={s["ds-page"]}>{props.children}</section>;
}
