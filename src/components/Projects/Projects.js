import { Container, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProjectsDesktop from "../ProjectsDesktop/ProjectsDesktop";
import Hidden from "@material-ui/core/Hidden";
import React from "react";
import Fade from "@material-ui/core/Fade";
import ProjectsMobile from "../ProjectsMobile/ProjectsMobile";

const useStyles = makeStyles((theme) => ({
  typoh3: {
    margin: "10px 0",
    padding: "0 10px",
  },
}));
function Projects(props) {
  const classes = useStyles();
  return (
    <Fade in={props.show} timeout={1000}>
      <div data-show={props.dataShow}>
        <Typography
          variant="h3"
          align="center"
          color="textSecondary"
          className={classes.typoh3}
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Pet проекты
          <Hidden smDown>
            <Typography variant="subtitle2">
              (передвигайте карточки по доске)
            </Typography>
          </Hidden>
        </Typography>

        <Hidden smDown>
          <ProjectsDesktop />
        </Hidden>
        <Hidden mdUp>
          <ProjectsMobile />
        </Hidden>
      </div>
    </Fade>
  );
}

export default Projects;
