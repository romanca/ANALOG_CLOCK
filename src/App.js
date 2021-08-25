import React from "react";
import BeijingTime from "./Components/Times/BeijingTime";
import CurrentTime from "./Components/Times/CurrentTime";
import LondonTime from "./Components/Times/LondonTime";
import NewDelhiTime from "./Components/Times/NewDelhiTime";
import NewYorkTime from "./Components/Times/NewYorkTime";
import ParisTime from "./Components/Times/ParisTime";
import TokyoTime from "./Components/Times/TokyoTime";
import {
  AppContainer,
  CircleContainer,
  CircleGraph,
  CircleItem,
  MainClock,
} from "./shared/styled-components";

const App = () => {
  const circlesContainer = React.useRef(null);
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const mainCircle = circlesContainer.current;
    const circleItems = mainCircle.childNodes;

    let angle = 360 - 90;
    let dangle = 360 / circleItems.length;

    for (let i = 0; i < circleItems.length; i++) {
      let circle = circleItems[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${
        mainCircle.clientWidth / 2
      }px) rotate(-${angle}deg)`;
    }
  }, []);

  React.useEffect(() => {
    const clock = setInterval(() => {
      setTime(() => new Date());
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  return (
    <AppContainer>
      <MainClock>
        <CurrentTime   />
      </MainClock>
      <CircleGraph ref={circlesContainer}>
        <CircleContainer>
          <CircleItem>
            <NewYorkTime />
          </CircleItem>
          <div style={{ position: "relative", top: 90 }}>New York</div>
        </CircleContainer>
        <CircleContainer>
          <CircleItem>
            <LondonTime />
          </CircleItem>
          <div style={{ position: "relative", top: 90 }}>London</div>
        </CircleContainer>
        <CircleContainer>
          <CircleItem>
            <NewDelhiTime />
          </CircleItem>
          <div style={{ position: "relative", top: 90 }}>New Delhi</div>
        </CircleContainer>
        <CircleContainer>
          <CircleItem>
            <ParisTime />
          </CircleItem>
          <div style={{ position: "relative", top: 90 }}>Paris</div>
        </CircleContainer>
        <CircleContainer>
          <CircleItem>
            <TokyoTime />
          </CircleItem>
          <div style={{ position: "relative", top: 90 }}>Tokyo</div>
        </CircleContainer>
        <CircleContainer>
          <CircleItem>
            <BeijingTime />
          </CircleItem>
          <div style={{ position: "relative", top: 90 }}>Beijing</div>
        </CircleContainer>
      </CircleGraph>
    </AppContainer>
  );
};

export default App;
