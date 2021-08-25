import styled from "styled-components";
import Circle from "../Components/Circle";
import image from "../image.jpg";

export const BeijingTimeMark = styled.div`
  position: absolute;
  border-radius: 100px;
  top: 6px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0)
    rotate(${(props) => props.rotation || "0deg"});
  transform-origin: center 69px;
`;

export const BeijingTimeContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 35px 15px rgba(0, 0, 0, 0.15);
`;

export const NewYorkTimeMark = styled.div`
  position: absolute;
  width: 1px;
  height: 20px;
  background: black;
  border-radius: 100px;
  top: 6px;
  left: 50%;
  transform: rotate(${(props) => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 69px;
`;

export const NewYorkTimeContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
`;

export const NewDelhiTimeMark = styled.div`
  position: absolute;
  border-radius: 100px;
  top: 6px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0)
    rotate(${(props) => props.rotation || "0deg"});
  transform-origin: center 69px;
`;

export const NewDelhiTimeContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 35px 15px rgba(0, 0, 0, 0.15);
`;

export const ParisTimeContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

export const ParisTimeDot = styled(Circle)`
  position: absolute;
  background: black;
  top: 6px;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transform: rotate(${(props) => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 69px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
`;

export const TokyoTimeMark = styled.div`
  position: absolute;
  border-radius: 100px;
  top: 6px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0)
    rotate(${(props) => props.rotation || "0deg"});
  transform-origin: center 69px;
`;

export const TokyoTimeContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

export const LondonTimeDot = styled(Circle)`
  position: absolute;
  background: black;
  top: 6px;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transform: rotate(${(props) => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 69px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
`;

export const LondonTimeContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const CurrentTimeMark = styled.div`
  position: absolute;
  width: 1px;
  height: 20px;
  background: black;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  transform: rotate(${(props) => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 130px;
`;

export const SecondHand = styled.div`
  position: absolute;
  width: 1px;
  height: ${(props) => 88 - 10 - props.borderWidth}px;
  background: black;
  border-radius: 100px;
  top: 7px;
  left: 50%;
  transform: rotate(${(props) => props.rotation || "30deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px bottom;
`;

export const MinuteHand = styled.div`
  position: absolute;
  width: 3px;
  height: ${(props) => 105 - 50 - props.borderWidth}px;
  background: black;
  border-radius: 100px;
  top: 30px;
  left: 50%;
  transform: rotate(${(props) => props.rotation || "30deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px bottom;
`;

export const HourHand = styled.div`
  position: absolute;
  width: 6px;
  height: ${(props) => 115 - 70 - props.borderWidth}px;
  background: black;
  border-radius: 100px;
  top: 40px;
  left: 50%;
  transform: rotate(${(props) => props.rotation || "30deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px bottom;
`;

export const Dot = styled(Circle)`
  position: absolute;
  background: black;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

export const MainClock = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 280px;
  height: 280px;
  border: 10px solid black;
  box-shadow: inset 0 0 25px 5px rgba(0, 0, 0, 0.15);
  background: white;
`;

export const CircleGraph = styled.div`
  position: relative;
  width: 550px;
  height: 550px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 2px * 2);
    height: calc(100% - 2px * 2);
    border-radius: 50%;
  }
`;

export const CircleItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  margin: calc(-150px / 2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const CircleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180px;
  height: 180px;
  margin: calc(-180px / 2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${image});
`;
