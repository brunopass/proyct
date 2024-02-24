import Renderer from "@/components/Renderer/Renderer";
import { Component } from "@/core/domain/models/Component";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePages } from "./pages.context";
import { useComponents } from "./components.context";

export type BuilderContextProps = {
  currentBlockId: string;
  setCurrentBlockId: Dispatch<string>;
  onDrag: (c: Component) => void;
};
export const BuilderContext = createContext<BuilderContextProps>(
  // @ts-ignore
  {}
);

export type BuilderProviderProps = {
  children: ReactNode;
};
export function BuilderProvider(props: BuilderProviderProps) {
  const { insertElement } = usePages();
  const { components } = useComponents();
  const [componentDragged, setComponentDragged] = useState<Component | null>(
    null
  );
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentBlockId, setCurrentBlockId] = useState<string>("");

  useEffect(() => {
    if (!mouseDown && componentDragged && isDragging) {
      if (currentBlockId) {
        const component = {
          ...componentDragged,
          id: Date.now().toString(),
        };
        insertElement(currentBlockId, component);
      }
      setIsDragging(false);
      setComponentDragged(null);
      setCurrentBlockId("");
    }
  }, [mouseDown, currentBlockId]);

  useEffect(() => {
    console.log(currentBlockId);
  }, [currentBlockId]);

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const onDrag = (component: Component) => {
    setIsDragging(true);

    // @ts-ignore
    setComponentDragged(components[component.id]);
  };

  const context = {
    setCurrentBlockId,
    currentBlockId,
    onDrag,
  };

  return (
    <BuilderContext.Provider value={context}>
      <div
        style={{ position: "relative" }}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseMove={handleMouseMove}
      >
        {componentDragged && isDragging && (
          <div
            style={{
              zIndex: 999999,
              position: "absolute",
              top: 0,
              left: 0,
              transform: `translateX(${mousePosition?.x + 5}px) translateY(${
                window.scrollY + mousePosition?.y
              }px)`,
            }}
            key={componentDragged?.id}
          >
            <Renderer key={componentDragged?.id} {...componentDragged} />
          </div>
        )}
        {props.children}
      </div>
    </BuilderContext.Provider>
  );
}

export const useBuilder = () => useContext(BuilderContext);
