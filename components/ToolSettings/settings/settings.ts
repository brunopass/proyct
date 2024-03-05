import { Component } from "@/core/domain/models/Component";

export interface ISetting {
  onChange: (c: Component) => void;
  component: Component;
}
