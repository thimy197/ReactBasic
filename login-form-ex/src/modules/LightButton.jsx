import './LightButton.css';

function LightButton({ isButtonOn }) {
  var [isOn, setIsOn] = isButtonOn;
  function onLight() {
    setIsOn(!isOn);
  }
  return (
    <button
      className={`light-button ${isOn ? 'on-light-button' : 'off-light-button'}`}
      onClick={onLight}>{isOn ? 'ON' : 'OFF'}</button>
  );
}

export default LightButton;