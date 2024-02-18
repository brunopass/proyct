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
  const [componentDragged, setComponentDragged] = useState<Component | null>(
    null
  );
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentBlockId, setCurrentBlockId] = useState<string>("");

  const onDrag = (component: Component) => {
    setIsDragging(true);
    setComponentDragged(component);
  };

  const context = { setCurrentBlockId, currentBlockId, onDrag };

  //   useEffect(() => {
  //     console.log({ ...mousePosition, mouseDown, isDragging, componentDragged });
  //   }, [mousePosition, mouseDown, isDragging, componentDragged]);

  useEffect(() => {
    if (!mouseDown) {
      setIsDragging(false);
      setComponentDragged(null);
    }
  }, [mouseDown]);

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
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
              position: "fixed",
              top: 0,
              left: 0,
              transform: `translateX(${mousePosition?.x}px) translateY(${mousePosition?.y}px)`,
            }}
          >
            <Renderer {...componentDragged} />
          </div>
        )}
        {props.children}
      </div>
    </BuilderContext.Provider>
  );
}

export const useBuilder = () => useContext(BuilderContext);
