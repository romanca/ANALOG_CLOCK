import React from "react";
import Circle from "../Circle";
import useTime from "../../hooks/useTime";
import OutsideClocksHands from "../OutsideClocksHands";
import {
  NewDelhiTimeContainer,
  NewDelhiTimeMark,
} from "../../shared/styled-components";
import { marks } from "../../shared";

const NewDelhiTime = () => {
  const time = useTime("new-delhi");

  return (
    <NewDelhiTimeContainer>
      <Circle>
        {marks.map((_, i) => (
          <NewDelhiTimeMark key={i} rotation={i * 30 + "deg"}>
            {i === 0 ? 12 : i}
          </NewDelhiTimeMark>
        ))}
        <OutsideClocksHands time={time} borderWidth={0} />
      </Circle>
    </NewDelhiTimeContainer>
  );
};

export default NewDelhiTime;
