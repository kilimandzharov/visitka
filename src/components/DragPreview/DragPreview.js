import React from "react";
import Pet from "../Pet/Pet";
import { usePreview } from "react-dnd-preview";

function DragPreview({ cards }) {
  const { display, item, style } = usePreview();
  if (!display) {
    return null;
  }
  const width = +localStorage.getItem("width");
  const el = cards.find((e) => e.id === item.id);
  return (
    <div style={{ ...style, width: width + "px" }}>
      <Pet
        title={el.title}
        description={el.description}
        source={el.source}
        link={el.link}
      />
    </div>
  );
}

export default DragPreview;
