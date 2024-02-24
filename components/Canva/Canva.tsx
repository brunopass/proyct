import { usePages } from "@/contexts/pages.context";

import s from "./Canva.module.scss";
import CanvaRenderer from "../Renderer/CanvaRenderer";

export type CanvaProps = {};

export default function Canva(props: CanvaProps) {
  const { currentPage } = usePages();

  return (
    <section className={s["ds-canva"]}>
      {currentPage && (
        <CanvaRenderer key={currentPage?.id} {...currentPage?.structure} />
      )}
    </section>
  );
}
