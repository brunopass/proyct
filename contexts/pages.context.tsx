import { FetchPages } from "@/core/domain/controllers/Page.controller";
import { Component } from "@/core/domain/models/Component";
import { Page } from "@/core/domain/models/Page";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type PagesContextProps = {
  pages: Array<Page>;
  currentPageId: string;
  currentPage?: Page;
  setCurrentPageId: Dispatch<string>;
  insertElement: (id: string, c: Component) => void;
};
export const PagesContext = createContext<PagesContextProps>(
  // @ts-ignore
  {}
);

function clone(obj: any) {
  if (null == obj || "object" != typeof obj) return obj;
  var copy = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}

const insertElementById = (
  root: Component,
  parentId: string,
  newElement: Component
): Component | null => {
  try {
    if (root.id === parentId) {
      return {
        ...root,
        children: [...root.children, newElement],
      };
    } else {
      return {
        ...root,
        // @ts-ignore
        children: root.children.map((root) =>
          insertElementById(root, parentId, newElement)
        ),
      };
    }
  } catch (err) {
    console.log(err);
    return root;
  }
};

export type PagesProviderProps = { children: ReactNode };
export function PagesProvider(props: PagesProviderProps) {
  const [pages, setPages] = useState<Array<Page>>([]);
  const [currentPage, setCurrentPage] = useState<Page>();
  const [currentPageId, setCurrentPageId] = useState<string>("");

  useEffect(() => {
    handleFetchPages();
  }, []);

  useEffect(() => {
    setCurrentPage(pages.find((page) => page.id === currentPageId));
  }, [currentPageId]);

  const handleFetchPages = async () => {
    try {
      const pages = await FetchPages();
      setPages(pages);

      setCurrentPageId(pages[0].id);
    } catch (err) {
      console.log(err);
    }
  };

  const insertElement = (id: string, component: Component) => {
    try {
      if (currentPage) {
        let currentPageApp: any = Object.assign(
          {},
          {
            ...clone({
              ...pages.find((i) => i.id === currentPageId),
            }),
          }
        );

        let app = insertElementById(currentPageApp.structure, id, {
          ...component,
          id: Date.now().toString(),
        });
        console.log(app);
        setPages((prev: any) =>
          prev.map((page: any) => {
            if (page.id === currentPageId) {
              return { ...page, structure: app };
            } else {
              return page;
            }
          })
        );
        setCurrentPage((prev: any) => ({ ...prev, structure: app }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const context = {
    pages,
    currentPageId,
    currentPage,
    setCurrentPageId,
    insertElement,
  };
  return (
    <PagesContext.Provider value={context}>
      {props.children}
    </PagesContext.Provider>
  );
}

export const usePages = () => useContext(PagesContext);
