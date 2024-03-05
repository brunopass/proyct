import { ISetting } from "../settings";

export default function AntdTextSettings(props: ISetting) {
  return <div>{props.component.id}</div>;
}
