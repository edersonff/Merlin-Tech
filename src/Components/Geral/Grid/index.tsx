import React from "react";
import { GridProps } from "./types";

export default function Grid({
  children,
  gridX,
  gridY,
  gridGap,
  className,
}: GridProps) {
  const classGridCols = gridX ? `grid-cols-${gridX}` : "grid-cols-2";
  const classGridRows = gridY ? `grid-rows-${gridY}` : "";
  const classGridGap = gridGap ? `gap-${gridGap}` : "gap-4";

  const classGrid = `grid ${classGridCols} ${classGridRows} ${classGridGap}`;

  const elements = React.Children.toArray(children);

  const columns = gridX ? gridX : 2;

  const elementsPerColumn = Math.ceil(elements.length / columns);

  const columnsArray = [];

  for (let i = 0; i < columns; i++) {
    columnsArray.push(
      elements.slice(i * elementsPerColumn, (i + 1) * elementsPerColumn)
    );
  }

  return (
    <div className={classGrid + " bg-white w-full" + className}>
      {columnsArray.map((column, index) => {
        return (
          <div className="grid gap-4" key={index}>
            {column}
          </div>
        );
      })}
    </div>
  );
}
