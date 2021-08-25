import React from "react";
import Circle from "../Circle";
import useTime from "../../hooks/useTime";
import OutsideClocksHands from "../OutsideClocksHands";
import {
  BeijingTimeContainer,
  BeijingTimeMark,
} from "../../shared/styled-components";
import { getRomanNumeral, marks } from "../../shared";

const BeijingTime = () => {
  const time = useTime("beijing");

  return (
    <BeijingTimeContainer>
      <Circle>
        {marks.map((_, i) => {
          return (
            <BeijingTimeMark key={i} rotation={i * 30 + "deg"}>
              {getRomanNumeral(i)}
            </BeijingTimeMark>
          );
        })}
        <OutsideClocksHands time={time} borderWidth={10} />
      </Circle>
    </BeijingTimeContainer>
  );
};

export default BeijingTime;
