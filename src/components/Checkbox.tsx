import { useState } from 'react';
import checkIcon from '../assets/icon-check.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodoCompleted } from '../redux/slice/todoListSlice';

function Checkbox({ isChecked, taskId }) {
  const dispatch = useDispatch();
  const handleToggleChecked = () => {
    dispatch(toggleTodoCompleted(taskId));
  };
  return (
    <label
      onClick={handleToggleChecked}
      className={`flex items-center justify-center ${
        isChecked ? 'bg-gradient-linear' : 'border border-french-gray'
      } rounded-full min-w-6 min-h-6 max-w-6 max-h-6 mx-2`}
    >
      <img src={checkIcon} alt="checkbox" className="min-w-2 min-h-2 " />
    </label>
  );
}

export default Checkbox;
