import { Component } from "./Component";

export type Section = {
  id: string;
  title: string;
  components: Array<Component>;
};
