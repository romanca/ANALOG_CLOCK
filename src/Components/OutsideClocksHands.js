import React from "react";
import {
  Dot,
  HourHand,
  MinuteHand,
  SecondHand,
} from "../shared/styled-components";

const OutsideClocksHands = ({ time }) => {
  const borderWidth = 10;

  return (
    <div>
      <SecondHand
        borderWidth={borderWidth}
        rotation={time.getSeconds() * 6 + "deg"}
      />
      <MinuteHand
        borderWidth={borderWidth}
        rotation={(time.getMinutes() + time.getSeconds() / 60) * 6 + "deg"}
      />
      <HourHand
        borderWidth={borderWidth}
        rotation={
          ((time.getHours() % 12) +
            time.getMinutes() / 60 +
            time.getSeconds() / 3600) *
            30 +
          "deg"
        }
      />
      <Dot size={10} />
    </div>
  );
};

export default OutsideClocksHands;
