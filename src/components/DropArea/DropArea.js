import { useDrop } from "react-dnd";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "700px",
    width: "95%",
    boxShadow: "0px 0px 10px gray",
    backgroundColor: "#efefef",
    marginBottom: "50px",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
}));

function DropArea(props) {
  const classes = useStyles();
  const [, drop] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      const container = document.querySelector(".drop");
      const [width, height] = [
        Math.round(container.offsetWidth),
        Math.round(container.offsetHeight),
      ];
      const [percX, percY] = [
        +item.x.slice(0, item.x.length - 1),
        +item.y.slice(0, item.y.length - 1),
      ];
      var [numberX, numberY] = [(percX * width) / 100, (percY * height) / 100];

      const [x, y] = [
        ((numberX +
          (monitor.getSourceClientOffset().x -
            monitor.getInitialSourceClientOffset().x)) /
          width) *
          100 +
          "%",
        ((numberY +
          (monitor.getSourceClientOffset().y -
            monitor.getInitialSourceClientOffset().y)) /
          height) *
          100 +
          "%",
      ];

      props.moveCard(item.id, x, y);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item, monitor) => {
      const drop = document.querySelector(".drop");

      const { offsetWidth: parWidth, offsetHeight: parHeight } = drop;
      const { offsetWidth: elWidth, offsetHeight: elHeight } =
        document.querySelector(`.draggable[data-id='${item.id}']`);
      const { x: parentX, y: parentY } = drop.getBoundingClientRect();
      let { x: elemX, y: elemY } = monitor.getSourceClientOffset();
      [elemX, elemY] = [elemX - parentX, elemY - parentY];
      return (
        elemX + elWidth <= parWidth &&
        elemY + elHeight <= parHeight &&
        elemX >= 0 &&
        elemY >= 0
      );
    },
  });

  React.useEffect(() => {
    const dropArea = document.querySelector(".drop");
    localStorage.setItem("width", String(dropArea.offsetWidth * 0.25));
    function resizeListener() {
      const widthOfCard = dropArea.offsetWidth * 0.25 + "";
      localStorage.setItem("width", widthOfCard);
    }
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  return (
    <Container
      ref={drop}
      style={{}}
      className={classNames(classes.container, "drop")}
    >
      {props.children}
    </Container>
  );
}

export default DropArea;
