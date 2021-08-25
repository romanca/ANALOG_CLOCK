import React from "react";
import Circle from "../Circle";
import useTime from "../../hooks/useTime";
import OutsideClocksHands from "../OutsideClocksHands";
import {
  NewYorkTimeContainer,
  NewYorkTimeMark,
} from "../../shared/styled-components";
import { marks } from "../../shared";

const NewYorkTime = () => {
  const time = useTime("new-york");

  return (
    <NewYorkTimeContainer>
      <Circle>
        {marks.map((_, i) => (
          <NewYorkTimeMark key={i} rotation={i * 30 + "deg"} />
        ))}
        <OutsideClocksHands time={time} />
      </Circle>
    </NewYorkTimeContainer>
  );
};

export default NewYorkTime;
