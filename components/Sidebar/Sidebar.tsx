import s from "./Sidebar.module.scss";
import Toolbar from "../Toolbar";
import { Divider, Input, Row } from "antd";
import { useTranslation } from "next-i18next";
import { useComponents } from "@/contexts/components.context";
import Section from "../Section/Section";

export type SidebarProps = {};

export default function Sidebar(props: SidebarProps) {
  const { t } = useTranslation("common");
  const { sections } = useComponents();

  return (
    <aside className={s["ds-sidebar"]}>
      <Toolbar />
      <section>
        <Row style={{ padding: 14 }} align="middle" justify="center">
          <Input placeholder={t("sidebar.placeholder")} />
        </Row>
        <Divider style={{ margin: 0, backgroundColor: "#eaecf0" }} />
        <div>
          {sections.map((section) => (
            <Section key={section.id} {...section} />
          ))}
        </div>
      </section>
    </aside>
  );
}
