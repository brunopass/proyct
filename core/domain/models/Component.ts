export type Component = {
  id: string;
  seed: "HTML" | "ANTD";
  tag: string;
  props: any;
  children: Array<Component>;
  name?: string;
};
