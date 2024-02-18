import { Section } from "../models/Section";

export const FetchSections = async (): Promise<Array<Section>> => {
  return [
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
        },
        {
          id: "antd-switch",
          seed: "ANTD",
          props: {},
          tag: "switch",
          children: [],
          name: "Switch",
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
        },
        {
          id: "antd-card",
          seed: "ANTD",
          props: {},
          tag: "card",
          children: [],
          name: "Card",
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
        },
        // {
        //   id: "chakra-button",
        //   seed: "CHAKRA",
        //   tag: "button",
        //   props: {
        //     variant: "solid",
        //     colorScheme: "purple",
        //     content: "Action",
        //   },
        //   children: [],
        //   name: "Button",
        // },
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
        },
        {
          id: "antd-date-picker",
          seed: "ANTD",
          props: {},
          tag: "datePicker",
          children: [],
          name: "Date Picker",
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
  ];
};
