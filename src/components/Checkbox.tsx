import checkIcon from '../assets/icon-check.svg';
import { useDispatch } from 'react-redux';
import { toggleTodoCompleted } from '../redux/slice/todoListSlice';

interface CheckboxProps {
  isChecked: boolean;
  taskId: number;
}

function Checkbox({ isChecked, taskId }: CheckboxProps) {
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
      <img
        src={checkIcon}
        alt="checkbox"
        className={`min-w-2 min-h-2 ${isChecked ? 'block' : 'hidden'} `}
      />
    </label>
  );
}

export default Checkbox;
