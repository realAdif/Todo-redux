import { useState } from 'react';
import checkIcon from '../assets/icon-check.svg';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label
      onClick={handleClick}
      className={`flex items-center justify-center ${
        isChecked ? 'bg-gradient-linear' : 'border border-french-gray'
      } rounded-full min-w-6 min-h-6 max-w-6 max-h-6 mx-2`}
    >
      <img src={checkIcon} alt="checkbox" className="min-w-2 min-h-2 " />
    </label>
  );
}

export default Checkbox;
