import { FetchSections } from "@/core/domain/controllers/Section.controller";
import { Section } from "@/core/domain/models/Section";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const ComponentsContext = createContext<{
  sections: Array<Section>;
  components: Record<string, ComponentsProps>;
  // @ts-ignore
}>({});

export type ComponentsProps = {
  children: ReactNode;
};
export function ComponentsProvider(props: ComponentsProps) {
  const [sections, setSections] = useState<Array<Section>>([
    {
      id: "1",
      title: "Atoms",
      components: [
        {
          id: "antd-text",
          seed: "ANTD",
          props: {
            content: "Text",
          },
          tag: "text",
          children: [],
          name: "Text",
          container: false,
        },
        {
          id: "antd-row",
          seed: "ANTD",
          props: {
            content: "Row",
          },
          tag: "row",
          children: [],
          name: "Row",
          container: true,
        },
        {
          id: "antd-col",
          seed: "ANTD",
          props: {
            content: "Col",
          },
          tag: "col",
          children: [],
          name: "Column",
          container: true,
        },
        {
          id: "antd-switch",
          seed: "ANTD",
          props: {},
          tag: "switch",
          children: [],
          name: "Switch",
          container: false,
        },
        {
          id: "antd-button",
          seed: "ANTD",
          props: {
            type: "primary",
            content: "Action",
          },
          tag: "button",
          children: [],
          name: "Button",
          container: false,
        },
        {
          id: "antd-input",
          seed: "ANTD",
          props: {
            placeholder: "Placeholder...",
          },
          tag: "input",
          children: [],
          name: "Input",
          container: false,
        },
        {
          id: "antd-radio",
          seed: "ANTD",
          props: {
            checked: true,
          },
          tag: "radio",
          children: [],
          name: "Radio",
          container: false,
        },
        {
          id: "antd-tag",
          seed: "ANTD",
          props: {
            content: "Tag",
          },
          tag: "tag",
          children: [],
          name: "Tag",
          container: false,
        },
        {
          id: "antd-card",
          seed: "ANTD",
          props: {},
          tag: "card",
          children: [],
          name: "Card",
          container: true,
        },
        {
          id: "antd-checkbox",
          seed: "ANTD",
          props: {
            defaultChecked: true,
          },
          tag: "checkbox",
          children: [],
          name: "Checkbox",
          container: false,
        },
        {
          id: "chakra-button",
          seed: "CHAKRA",
          tag: "button",
          props: {
            variant: "solid",
            colorScheme: "purple",
            content: "Action",
          },
          children: [],
          name: "Button",
          container: false,
        },
      ],
    },
    {
      id: "2",
      title: "Molecules",
      components: [
        {
          id: "antd-color-picker",
          seed: "ANTD",
          props: {},
          tag: "colorPicker",
          children: [],
          name: "Color Picker",
          container: false,
        },
        {
          id: "antd-date-picker",
          seed: "ANTD",
          props: {},
          tag: "datePicker",
          children: [],
          name: "Date Picker",
          container: false,
        },
        {
          id: "antd-cascader",
          seed: "ANTD",
          props: {
            options: [
              {
                value: "Option 1",
                label: "Option 1",
                children: [
                  {
                    value: "Option A",
                    label: "Option A",
                  },
                  {
                    value: "Option B",
                    label: "Option B",
                  },
                ],
              },
              {
                value: "Option 2",
                label: "Option 2",
              },
            ],
          },
          container: false,
          tag: "cascader",
          children: [],
          name: "Cascader",
        },

        {
          id: "antd-rate",
          seed: "ANTD",
          props: { defaultValue: 4 },
          tag: "rate",
          children: [],
          name: "Rate",
          container: false,
        },

        {
          id: "antd-segmented",
          seed: "ANTD",
          props: {
            options: ["A", "B"],
          },
          tag: "segmented",
          children: [],
          name: "Segmented",
          container: false,
        },
      ],
    },
    {
      id: "3",
      title: "Organisms",
      components: [],
    },
    {
      id: "4",
      title: "Templates",
      components: [],
    },
  ]);
  const [components, setComponents] = useState<Record<string, ComponentsProps>>(
    {}
  );
  useEffect(() => {
    // fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const response = await FetchSections();
      const sections = [...response];
      setSections(sections);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sections.forEach((section) =>
      section.components.forEach((component) =>
        setComponents((prev: any) => ({ ...prev, [component.id]: component }))
      )
    );
  }, [sections]);

  const context = { sections, components };
  return (
    <ComponentsContext.Provider value={context}>
      {props.children}
    </ComponentsContext.Provider>
  );
}
export const useComponents = () => useContext(ComponentsContext);
