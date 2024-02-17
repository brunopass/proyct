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
  // @ts-ignore
}>({});

export type ComponentsProps = {
  children: ReactNode;
};
export function ComponentsProvider(props: ComponentsProps) {
  const [sections, setSections] = useState<Array<Section>>([]);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const sections = await FetchSections();
      setSections(sections);
    } catch (err) {
      console.error(err);
    }
  };

  const context = { sections };
  return (
    <ComponentsContext.Provider value={context}>
      {props.children}
    </ComponentsContext.Provider>
  );
}
export const useComponents = () => useContext(ComponentsContext);
