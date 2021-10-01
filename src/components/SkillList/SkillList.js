import React from "react";
import Skill from "../Skill/Skill";
import { Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import skills from "../../skills";
import Fade from "@material-ui/core/Fade";

const SkillList = React.memo((props) => {
  const [expanded, setExpanded] = React.useState(false);
  console.log(props);

  return (
    <div
      style={{
        backgroundColor: "rgb(88,109,152)",
        padding: "50px 0",
        ...props.style,
      }}
    >
      <Container maxWidth="md" style={{ marginBottom: "30px" }}>
        <Fade in={props.show} timeout={1000}>
          <div data-show={props.dataShow}>
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              style={{ fontWeight: "bolder", marginBottom: "20px" }}
            >
              Мои компетенции
            </Typography>
            {skills.map((item, index) => (
              <Skill
                key={item.id.description}
                image={item.image}
                title={item.title}
                data={item.data}
                index={index}
                expanded={expanded === index}
                setExpanded={setExpanded}
              />
            ))}
          </div>
        </Fade>
      </Container>
    </div>
  );
});

export default SkillList;
