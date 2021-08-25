import React from "react";
import Circle from "../Circle";
import useTime from "../../hooks/useTime";
import OutsideClocksHands from "../OutsideClocksHands";
import {
  TokyoTimeContainer,
  TokyoTimeMark,
} from "../../shared/styled-components";
import { getRomanNumeral, marks } from "../../shared";

const TokyoTime = () => {
  const time = useTime("tokyo");

  return (
    <TokyoTimeContainer>
      <Circle>
        {marks.map((_, i) => {
          return (
            <TokyoTimeMark key={i} rotation={i * 30 + "deg"}>
              {getRomanNumeral(i)}
            </TokyoTimeMark>
          );
        })}
        <OutsideClocksHands time={time} borderWidth={10} />
      </Circle>
    </TokyoTimeContainer>
  );
};

export default TokyoTime;
