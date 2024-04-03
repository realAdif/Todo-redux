import crossIcon from '../assets/icon-cross.svg';
import { Todo } from '../redux/slice/todoListSlice';
import { Reorder } from 'framer-motion';
import Checkbox from './Checkbox';

interface Props {
  todo: Todo;
  onClick: (arg: number) => void;
}

export default function Task({ todo, onClick }: Props) {
  return (
    <Reorder.Item
      value={todo}
      className=" active:border-y  even:border-y border-french-gray dark:border-dark-grayish-blue"
    >
      <div className="flex justify-between items-center py-4 px-4  ">
        <div className="flex">
          <Checkbox isChecked={todo.completed} taskId={todo.id} />
          <p className={`ml-2 ${todo.completed && 'line-through'}`}>
            {todo.title}
          </p>
        </div>
        <button onClick={() => onClick(todo.id)}>
          {' '}
          {/* Invoke the onClick function with todo id */}
          <img src={crossIcon} alt="cross icon" />
        </button>
      </div>
    </Reorder.Item>
  );
}
