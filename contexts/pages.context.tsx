import { FetchPages } from "@/core/domain/controllers/Page.controller";
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
  setCurrentPageId: Dispatch<string>;
};
export const PagesContext = createContext<PagesContextProps>(
  // @ts-ignore
  {}
);

export type PagesProviderProps = { children: ReactNode };
export function PagesProvider(props: PagesProviderProps) {
  const [pages, setPages] = useState<Array<Page>>([]);
  const [currentPageId, setCurrentPageId] = useState<string>("");

  useEffect(() => {
    handleFetchPages();
  }, []);

  const handleFetchPages = async () => {
    try {
      const pages = await FetchPages();
      setPages(pages);
      setCurrentPageId(pages[0].id);
    } catch (err) {
      console.log(err);
    }
  };

  const context = {
    pages,
    currentPageId,
    setCurrentPageId,
  };
  return (
    <PagesContext.Provider value={context}>
      {props.children}
    </PagesContext.Provider>
  );
}

export const usePages = () => useContext(PagesContext);
