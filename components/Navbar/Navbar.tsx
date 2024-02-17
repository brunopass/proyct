import s from "./Navbar.module.scss";
export type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  return <nav className={s["ds-navbar"]}></nav>;
}
