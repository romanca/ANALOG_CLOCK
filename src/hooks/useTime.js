import React from "react";
import getTime from "../shared/getTime";

const useTime = (city) => {
  const [time, setTime] = React.useState(getTime(city));

  React.useEffect(() => {
    const id = setInterval(() => {
      setTime(() => getTime(city));
    }, 1000);
    return () => clearInterval(id);
  }, [city]);

  return time;
};

export default useTime;
