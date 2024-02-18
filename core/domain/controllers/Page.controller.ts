import { Page } from "../models/Page";

export const FetchPages = async (): Promise<Array<Page>> => {
  return [
    {
      id: "/",
      path: "/",
      structure: [
        {
          id: "page-body",
          seed: "HTML",
          tag: "body",
          props: {
            style: {
              minWidth: "100%",
              width: "100%",
              heigth: "max-content",
              minHeight: "100vh",
              margin: 0,
              padding: 0,
            },
          },
          children: [
            {
              id: "1",
              seed: "HTML",
              tag: "div",
              props: {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                },
              },
              children: [
                {
                  id: "2",
                  seed: "HTML",
                  tag: "div",
                  props: {
                    style: {
                      width: "100%",
                      height: "40px",
                      backgroundColor: "#00FF00",
                    },
                  },
                  children: [],
                },
                {
                  id: "3",
                  seed: "HTML",
                  tag: "div",
                  props: {
                    style: {
                      width: "100%",
                      paddingBottom: 20,
                      backgroundColor: "#FF0000",
                    },
                  },
                  children: [
                    {
                      id: "4",
                      seed: "HTML",
                      tag: "div",
                      props: {
                        style: {
                          width: "100%",
                          height: "40px",
                          backgroundColor: "#0000FF",
                        },
                      },
                      children: [],
                    },
                    {
                      id: "5",
                      seed: "HTML",
                      tag: "div",
                      props: {
                        style: {
                          width: "100%",
                          height: "10px",
                          backgroundColor: "#FF00FF",
                        },
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "/app",
      path: "/app",
      structure: [
        {
          id: "page-body",
          seed: "HTML",
          tag: "body",
          props: {
            style: {
              margin: 0,
              padding: 0,
            },
          },
          children: [],
        },
      ],
    },
    {
      id: "/sign-in",
      path: "/sign-in",
      structure: [
        {
          id: "page-body",
          seed: "HTML",
          tag: "body",
          props: {
            style: {
              margin: 0,
              padding: 0,
            },
          },
          children: [],
        },
      ],
    },
  ];
};
