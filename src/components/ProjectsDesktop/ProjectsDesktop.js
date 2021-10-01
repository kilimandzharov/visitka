import React from "react";
import DropArea from "../DropArea/DropArea";
import DragCard from "../DragCard/DragCard";
import cards from "../../petCards";
import DragPreview from "../DragPreview/DragPreview";

const ProjectsDesktop = React.memo((props) => {
  const [coords, setCoords] = React.useState(cards);

  const moveCard = (id, x, y) => {
    setCoords((prevState) => {
      let targetNode = { ...prevState.find((element) => element.id === id) };
      targetNode.x = x;
      targetNode.y = y;
      const changed = prevState.map((element) =>
        element.id === id ? targetNode : element
      );
      const targetIndex = changed.indexOf(targetNode);
      changed.splice(targetIndex, 1);
      changed.push(targetNode);
      return changed;
    });
  };
  return (
    <>
      <DropArea moveCard={moveCard}>
        {coords.map((element) => (
          <DragCard
            x={element.x}
            key={element.id}
            y={element.y}
            id={element.id}
            description={element.description}
            source={element.source}
            title={element.title}
            github={element.github}
            network={element.network}
          />
        ))}
      </DropArea>
      <DragPreview cards={cards} />
    </>
  );
});

export default ProjectsDesktop;
