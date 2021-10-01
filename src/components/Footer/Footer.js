import React from "react";
import { AppBar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Contact from "../Contact/Contact";
import useMediaQuery from "@material-ui/core/useMediaQuery";
function Footer() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <AppBar
      position="relative"
      color="primary"
      component="footer"
      style={{ padding: isMobile ? "0 0 10px 0" : "20px 0" }}
    >
      <Typography
        align={"center"}
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Contact
          href={"https://github.com/kilimandzharov"}
          source={"/assets/icons/gh-footer.svg"}
          size={isMobile ? 60 : 80}
        />
        <Contact
          href={"https://vk.com/kerel17"}
          source={"/assets/icons/vk-footer.svg"}
          size={isMobile ? 60 : 80}
        />
      </Typography>

      <Typography variant="subtitle2" align="center">
        Тел: +7(910)462-18-04
      </Typography>
      <Typography variant="subtitle2" align="center">
        Email: mozharov_2002@mail.ru
      </Typography>
      <Typography
        variant="subtitle2"
        style={{ color: "#a7a7a7" }}
        align={"center"}
      >
        &#169; 2021 Mozharov Kirill
      </Typography>
    </AppBar>
  );
}

export default Footer;
