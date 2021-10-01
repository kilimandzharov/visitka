import { useDrag } from "react-dnd";
import Pet from "../Pet/Pet";
import React from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

function DragCard({ id, x, y, description, source, title, github, network }) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "card",
    item: {
      id,
      x,
      y,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  React.useEffect(() => {
    preview(getEmptyImage());
  }, []);

  return (
    <div
      ref={drag}
      className="draggable"
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: "25%",
        maxHeight: "300px",
        cursor: "pointer",
        boxSizing: "border-box",
      }}
      data-id={id}
    >
      <Pet
        description={description}
        source={source}
        title={title}
        style={{ opacity: isDragging ? 0 : 1 }}
        github={github}
        network={network}
      />
    </div>
  );
}

export default DragCard;
