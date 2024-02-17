import { Section } from "../models/Section";

export const FetchSections = async (): Promise<Array<Section>> => {
  return [
    {
      id: "1",
      title: "Atoms",
      components: [
        {
          id: "antd-button",
          seed: "ANTD",
          props: {
            type: "primary",
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            },
          },
          tag: "button",
          children: [
            {
              id: "antd-button-label",
              seed: "HTML",
              props: {
                content: "1",
              },
              tag: "span",
              children: [],
            },
            {
              id: "antd-button-label",
              seed: "HTML",
              props: {
                content: "2",
              },
              tag: "span",
              children: [],
            },
          ],
          name: "Button",
        },
      ],
    },
    {
      id: "2",
      title: "Molecules",
      components: [],
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
