import { useState } from 'react';
import './SliderButton.css';

const SliderButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={`slider-container ${active ? 'active' : ''}`} onClick={handleClick}>
      <div className="slider-bg">
        {!active && <div className="arrows">{'>>>'}</div>}
        <div className="go-button">{'GO'}</div>
      </div>
    </div>
  );
};

export default SliderButton;