import { Page } from "../models/Page";

export const FetchPages = async (): Promise<Array<Page>> => {
  return [
    {
      id: "/",
      path: "/",
      structure: {
        id: "page-body",
        seed: "HTML",
        tag: "body",
        container: true,
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
        children: [],
      },
    },
    {
      id: "/app",
      path: "/app",
      structure: {
        id: "page-body",
        seed: "HTML",
        tag: "body",
        container: true,
        props: {
          style: {
            margin: 0,
            padding: 0,
          },
        },
        children: [],
      },
    },
    {
      id: "/sign-in",
      path: "/sign-in",
      structure: {
        id: "page-body",
        seed: "HTML",
        tag: "body",
        container: true,
        props: {
          style: {
            margin: 0,
            padding: 0,
          },
        },
        children: [],
      },
    },
  ];
};
