import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const CardIcon = React.memo(({ icon, link, iconHover, isMobile }) => {
  const useStyles = makeStyles((theme) => ({
    link: {
      position: "relative",
      display: "inline-block",
      height: isMobile ? "50px" : "30px",
      width: isMobile ? "50px" : "30px",
      backgroundImage: `url('${icon}')`,

      backgroundSize: isMobile ? "50px 50px" : "30px 30px",
      "&:hover": {
        backgroundImage: `url('${iconHover}')`,
      },
      margin: "0 5px",
    },
    backgroundSize: "contain",
  }));
  const classes = useStyles();
  return <a href={link} className={classes.link} />;
});

export default CardIcon;
