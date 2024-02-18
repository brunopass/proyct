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
  currentPage?: Page;
  setCurrentPageId: Dispatch<string>;
};
export const PagesContext = createContext<PagesContextProps>(
  // @ts-ignore
  {}
);

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

  const context = {
    pages,
    currentPageId,
    currentPage,
    setCurrentPageId,
  };
  return (
    <PagesContext.Provider value={context}>
      {props.children}
    </PagesContext.Provider>
  );
}

export const usePages = () => useContext(PagesContext);
