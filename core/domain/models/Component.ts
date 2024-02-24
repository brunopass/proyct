export type Component = {
  id: string;
  seed: "HTML" | "ANTD" | "CHAKRA";
  tag: string;
  props: any;
  children: Array<Component>;
  name?: string;
  container: boolean;
};
