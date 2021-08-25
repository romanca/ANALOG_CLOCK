import React from "react";
import Circle from "../Circle";
import useTime from "../../hooks/useTime";
import OutsideClocksHands from "../OutsideClocksHands";
import {
  LondonTimeContainer,
  LondonTimeDot,
} from "../../shared/styled-components";
import { marks } from "../../shared";

const LondonTime = () => {
  const time = useTime("london");

  return (
    <LondonTimeContainer>
      <Circle>
        {marks.map((_, i) => {
          if (i % 3 === 0) {
            return (
              <LondonTimeDot size={10} key={i} rotation={i * 30 + "deg"} />
            );
          } else {
            return <LondonTimeDot size={4} key={i} rotation={i * 30 + "deg"} />;
          }
        })}
        <OutsideClocksHands time={time} borderWidth={4} />
      </Circle>
    </LondonTimeContainer>
  );
};

export default LondonTime;
