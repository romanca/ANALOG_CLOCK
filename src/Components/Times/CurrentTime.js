import React from "react";
import Circle from "../Circle";
import { marks } from "../../shared";
import { CurrentTimeMark } from "../../shared/styled-components";
import useTime from "../../hooks/useTime";
import Hands from "../../Hands";

const CurrentTime = () => {
  const time = useTime("bratislava");

  return (
    <Circle size={280}>
      {marks.map((_, i) => (
        <CurrentTimeMark key={i} size={280} rotation={i * 30 + "deg"} />
      ))}

      <Hands time={time} />
    </Circle>
  );
};

export default CurrentTime;
