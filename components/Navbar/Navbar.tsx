import { Button, Row, Space } from "antd";
import PageSelector from "../PageSelector/PageSelector";
import s from "./Navbar.module.scss";
export type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  return (
    <nav className={s["ds-navbar"]}>
      <div className={s["ds-navbar__container"]}>
        <PageSelector />
        <Row>
          <Space>
            <Button type="default">Preview</Button>
            <Button type="primary">Export</Button>
          </Space>
        </Row>
      </div>
    </nav>
  );
}
