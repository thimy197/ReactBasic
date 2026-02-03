import {  useState, useEffect } from 'react'
import dayjs from 'supersimpledev/dayjs'

export function CurrentTime() {
  const [timeVal, setTime] = useState(dayjs().format('HH:mm:ss'));
  //console.log("Component render");
  useEffect(() => {
    //console.log("Effect re-render....");
    const interval = setInterval(() => {
      //console.log("Interval tick");
      var currDay = dayjs().format('HH:mm:ss');
      setTime(currDay);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p>{timeVal}</p>
  );
  /*
  1. JSX render <p>
  2. UI
  3. useEffect([],[])// chỉ chạy 1 lần lúc create
  4. setInterval()
  5. sau 1s, State thay đổi -> re-render Component
      Nhưng useEffect() KHÔNG chạy lại (vì [])
  */
}