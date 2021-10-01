import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Contact from "../Contact/Contact";
import socials from "../../socials";

function Info(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMiddle = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Fade in={props.show} timeout={1000}>
      <div
        style={{
          padding: isMobile ? "0px" : "50px 20px",
          backgroundColor: "#fff",
          ...props.style,
        }}
        data-show={props.dataShow}
      >
        <Container
          maxWidth="lg"
          style={{
            display: "grid",
            alignContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <Grid
            container
            justifyContent="space-around"
            style={{ margin: "50px 0" }}
          >
            <Grid item md={5} sm={12} xs={12} style={{ textAlign: "center" }}>
              <img
                src={"/assets/me/me_4.jpeg"}
                style={{
                  width: isMobile ? "250px" : isMiddle ? "350px" : "470px",
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Typography
                variant={isMobile ? "h3" : "h2"}
                style={{
                  fontWeight: "bolder",
                  marginTop: isMobile ? "5px" : "0",
                  fontFamily: ' "Poiret One", sans-serif ',
                }}
                align={isMobile ? "center" : "start"}
              >
                Кирилл Можаров
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "15px" : null,
                }}
                align={isMobile ? "center" : "start"}
              >
                начинающий фронтенд разработчик
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  padding: isMobile ? "0 10%" : "0px",
                  marginTop: "10px",
                }}
                align={isMobile ? "justify" : "start"}
              >
                Меня зовут Можаров Кирилл Дмитриевич. Мне 19 лет и я студент
                второго курса РЭУ им. Г.В.Плеханова направления Прикладная
                инфор&shy;матика и математика. В будущем вижу себя фуллстеком.
                Рассмотрю любые предложения по моей специальности, в том числе и
                стажировки. Данный сайт сделан мной с использованием Material
                Ui.
              </Typography>
              <Box
                style={{
                  textAlign: isMobile ? "center" : "start",
                  marginTop: isMobile ? "20px" : "10px",
                }}
              >
                {socials.map((e) => (
                  <Contact href={e.href} source={e.source} size={50} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fade>
  );
}

export default Info;
