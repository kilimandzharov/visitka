import React from "react";
import Header from "../Header/Header";
import Info from "../Info/Info";
import SkillList from "../SkillList/SkillList";
import { useMediaQuery } from "@material-ui/core";
import Projects from "../Projects/Projects";
import { DndProvider } from "react-dnd";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import Certificate from "../Certificate/Certificate";
import Footer from "../Footer/Footer";

function App() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [show, setShow] = React.useState([false, false, false, false]);
  React.useEffect(() => {
    const options = {
      threshold: isMobile ? 0.1 : 0.3,
    };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        setShow((prevState) => {
          if (entry.intersectionRatio > observer.thresholds[0]) {
            prevState[+entry.target.dataset.show] = true;
            return [...prevState];
          }
          return prevState;
        });
      });
    };
    var observer = new IntersectionObserver(callback, options);
    show.map((e, id) =>
      observer.observe(document.querySelector(`div[data-show='${id}']`))
    );
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="parent">
        <Header />

        <Info dataShow={0} show={show[0]} />
        <SkillList dataShow={1} show={show[1]} />
        <Projects dataShow={2} show={show[2]} />
        <Certificate dataShow={3} show={show[3]} />
        <Footer />
      </div>
    </DndProvider>
  );
}

export default App;
