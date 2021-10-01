import { Box, Card } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames/bind";
import CardIcon from "../CardIcon/CardIcon";

const useStyles = makeStyles((theme) => ({
  card: {},
  media: {
    backgroundSize: "cover",
    backgroundPosition: "center 0px",
  },
}));

function Pet({ title, description, source, style, github, network, isMobile }) {
  const classes = useStyles();
  return (
    <Card className={classNames(classes.card, "pet")} style={style}>
      <CardMedia
        image={source}
        style={{ height: isMobile ? "250px" : "150px", direction: "ltr" }}
        className={classes.media}
      />

      <CardContent>
        <Typography color="textSecondary" style={{ direction: "ltr" }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          align="justify"
          color="textSecondary"
          style={{
            fontSize: "12px",
            textAlign: isMobile ? "justify" : "none",
            direction: "ltr",
          }}
        >
          {description}
        </Typography>
        <div
          style={{
            marginTop: "3px",
            direction: "rtl",
          }}
        >
          <CardIcon
            link={github}
            icon={"/assets/icons/gh-social.svg"}
            iconHover={"/assets/icons/gh-blue.svg"}
            isMobile={isMobile}
          />
          <CardIcon
            link={network}
            icon={"/assets/icons/network-black.png"}
            iconHover={"/assets/icons/network-purple.png"}
            isMobile={isMobile}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default Pet;
