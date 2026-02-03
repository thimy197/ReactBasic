import { useEffect, useRef } from 'react';
import './Clicked.css';

export function Clicked({ clickCount, autoState }) {
  //console.log("Render Clicked component, isAuto: ", isAuto);
  const [count, setCount] = clickCount;
  const [isAuto, setAuto] = autoState;
  const ref = useRef();

  function increaseCount() {
    //setCount(count + 1);// wrong, because count is stale value
    setCount(prevCount => prevCount + 1);
  }
  function resetCount() {
    setCount(0);
    setAuto(false);
  }
  function autoClick() {
    setAuto(true);
  }
  useEffect(() => {
    console.log("effect: ", isAuto);
    if (isAuto) {
      ref.current = setInterval(() => {
        console.log("interval....");
        //setCount(count + 1);// wrong, because count is stale value
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(ref.current);
    }
  }, [isAuto]);
  return (
    <div className='clicked-container'>
      <button onClick={increaseCount}>Clicked {count} {count > 0 ? "times" : "time"}</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={autoClick}>Auto Click</button>
    </div>
  );
}