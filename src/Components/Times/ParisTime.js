import React from "react";
import Circle from "../Circle";
import useTime from "../../hooks/useTime";
import OutsideClocksHands from "../OutsideClocksHands";
import {
  ParisTimeContainer,
  ParisTimeDot,
} from "../../shared/styled-components";
import { marks } from "../../shared";

const ParisTime = () => {
  const time = useTime("paris");

  return (
    <ParisTimeContainer>
      <Circle>
        {marks.map((_, i) => (
          <ParisTimeDot size={4} key={i} rotation={i * 30 + "deg"} />
        ))}
        <OutsideClocksHands time={time} borderWidth={4} />
      </Circle>
    </ParisTimeContainer>
  );
};

export default ParisTime;
