import React from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  certificate: {
    transition: "box-shadow 0.3s ease-in",
    "&:hover": {
      boxShadow: "0px 0px 20px #fff",
    },
  },
}));

function Certificate(props) {
  const { certificate } = useStyles();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div
      style={{ backgroundColor: "rgb(88,109,152)", padding: "40px 0 100px 0" }}
      data-show={props.dataShow}
    >
      <Fade in={props.show} timeout={1000}>
        <div>
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            style={{ fontWeight: "bolder", marginBottom: "20px" }}
          >
            Сертификаты
          </Typography>
          <Container maxWidth="lg">
            <Typography align="center">
              <a href={"https://www.hackerrank.com/certificates/1bf13aaddb7e"}>
                <img
                  src="/assets/certificate.png"
                  style={{ width: isMobile ? "90%" : "70%" }}
                  className={certificate}
                />
              </a>
            </Typography>
          </Container>
        </div>
      </Fade>
    </div>
  );
}

export default Certificate;
