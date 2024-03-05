import s from "./AppLayout.module.scss";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ToolSettings from "@/components/ToolSettings/ToolSettings";
import { ReactNode } from "react";

export type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
  return (
    <div className={s["ds-layout__container"]}>
      <Navbar />
      <div className={s["ds-layout"]}>
        <Sidebar />
        <div />
        <main>
          <div className={s["ds-layout__app"]}>{props.children}</div>
          <Footer />
        </main>
        <ToolSettings />
      </div>
    </div>
  );
}
