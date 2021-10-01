import React from "react";
import cards from "../../petCards";
import Carousel from "react-elastic-carousel";
import Pet from "../Pet/Pet";
import "./ProjectsMobile.css";
import { Container } from "@material-ui/core";

function ProjectsMobile() {
  return (
    <Container style={{ height: "500px" }}>
      <Carousel isRTL showArrows={false}>
        {cards.map((element) => (
          <Pet
            style={{ width: "100%" }}
            x={element.x}
            key={element.id}
            y={element.y}
            id={element.id}
            description={element.description}
            source={element.source}
            title={element.title}
            github={element.github}
            network={element.network}
            isMobile
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default ProjectsMobile;
