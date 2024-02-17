import s from "./AppLayout.module.scss";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
  return (
    <div className={s["ds-layout"]}>
      <Sidebar />
      <div />
      <main>
        <Navbar />
        {props.children}
        <Footer />
      </main>
    </div>
  );
}
