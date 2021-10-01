import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import React from "react";

function Skill(props) {
  return (
    <Accordion
      expanded={props.expanded}
      onChange={(event, isExpanded) => {
        console.log(isExpanded);
        props.setExpanded((prevState) => {
          return isExpanded ? props.index : false;
        });
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box>
          <img src={props.image} style={{ width: "50px" }} />
        </Box>
        <Typography
          color="textSecondary"
          style={{ alignSelf: "center", marginLeft: "30px" }}
        >
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="textSecondary">
          <Divider />
          <div style={{ marginTop: "10px" }}>{props.data}</div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Skill;
