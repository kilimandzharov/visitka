import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "grid",
  },
}));

function Header() {
  const classes = useStyles();
  const isMobileBig = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMiddle = useMediaQuery((theme) => theme.breakpoints.down("md"));

  React.useEffect(() => {
    const element = document.querySelector(".header");
    if (!isMobileBig) {
      const scrollListener = (event) => {
        if (window.pageYOffset <= 200) {
          element.style.backgroundPositionY =
            Math.floor(-window.pageYOffset) + "px";
        }
      };
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    } else {
      element.style.backgroundPositionY = "0px";
    }
  }, [isMobileBig]);

  return (
    <header
      className="header"
      style={{
        display: "grid",
        height: isMobileBig ? "100vh" : "700px",
        position: "relative",
        backgroundPosition: "0 0",
        backgroundImage: isMobileBig
          ? `url("./assets/mobile_rocks.jpg")`
          : `url("./assets/скалы.jpg")`,
        backgroundSize: isMobileBig ? "cover" : isMiddle ? "170%" : "120%",
      }}
    >
      <div className={classes.content}>
        <Fade in={true} timeout={1000}>
          <Box style={{ alignSelf: "center" }}>
            <div>
              <Typography
                variant="h3"
                style={{ fontWeight: "bolder" }}
                align="center"
                color="textPrimary"
              >
                Приветствую Вас!
              </Typography>
              <Typography
                variant={isMobileBig ? "body2" : "body1"}
                align="center"
                style={{ padding: "0 10px" }}
                color="textPrimary"
              >
                В этом разделе будет небольшая информация обо мне, моих
                компетенциях и проектах
              </Typography>
            </div>
          </Box>
        </Fade>
      </div>
    </header>
  );
}

export default Header;
