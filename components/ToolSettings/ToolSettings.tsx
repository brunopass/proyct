import { useTool } from "@/contexts/tool.context";
import s from "./ToolSettings.module.scss";
import { useMemo } from "react";
import { componentSettings } from "./utils";

export type ToolSettingsProps = {};

export default function ToolSettings(props: ToolSettingsProps) {
  const { selectedComponent } = useTool();

  const RenderSettings = useMemo(() => {
    try {
      if (!selectedComponent?.id) {
        return null;
      }

      const Item: JSX.Element =
        //   @ts-ignore
        componentSettings[selectedComponent.seed][selectedComponent.tag];

      // @ts-ignore
      return <Item onChange={(c) => {}} component={selectedComponent} />;
    } catch (err) {
      console.log(err);
      return null;
    }
  }, [selectedComponent]);

  return <aside className={s["ds-tool"]}>{RenderSettings}</aside>;
}
