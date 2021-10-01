import { makeStyles } from "@material-ui/core";
import React from "react";

const Contact = React.memo(({ href, source, size }) => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      display: "inline-block",
      height: `${size}px`,
      width: `${size}px`,
      borderRadius: "100%",
      backgroundImage: `url(${source})`,
      backgroundSize: `${size}px ${size}px`,
    },
  }));
  const classes = useStyles();
  return (
    <a href={href} style={{ height: `${size}px`, margin: "0 10px" }}>
      <div className={classes.icon} />
    </a>
  );
});

export default Contact;
