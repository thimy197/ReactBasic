import { useState} from 'react'
import LightButton from './modules/LightButton'
import {CurrentTime} from './modules/CurrentTime'
import {SignIn} from './modules/SignIn'
import {Clicked} from './modules/Clicked'
import './App.css'


function App() {
  const isButtonOn = useState(false);
  const isHiden = useState(true);

  //click
  const clickCount = useState(0);
  const autoState = useState(false);
  //console.log("Render App component");
  return (
    <>
      <LightButton isButtonOn={isButtonOn} />
      <hr />
      <SignIn isHiden={isHiden} />
      <hr />
      <CurrentTime />
      <hr />
      <Clicked clickCount={clickCount} autoState={autoState} />
    </>
  );
}

export default App
