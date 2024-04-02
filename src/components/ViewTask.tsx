import crossIcon from '../assets/icon-cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeTodo,
  clearCompletedTodo,
  setFilter,
  Todo,
} from '../redux/slice/todoListSlice';
import Checkbox from './Checkbox';

function ViewTask() {
  const filter = useSelector((state) => state.todoList.filter);
  const todosList = useSelector((state) => state.todoList.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };
  const handleFilterChange = (newFilter: 'all' | 'active' | 'completed') => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="bg-white dark:bg-very-dark-desaturated-blue text-black dark:text-white  w-full mt-6 rounded drop-shadow-lg">
      {todosList.map((todo: Todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center py-4 px-4  even:border-y border-french-gray dark:border-dark-grayish-blue"
        >
          <div className="flex">
            <Checkbox isChecked={todo.completed} taskId={todo.id} />
            <p className={`ml-2 ${todo.completed && 'line-through'} `}>
              {todo.title}
            </p>
          </div>
          <button onClick={() => handleRemoveTodo(todo.id)}>
            <img src={crossIcon} alt="cross icon" />
          </button>
        </div>
      ))}
      <div
        className={`flex justify-between text-xs  p-4 ${
          todosList.length <= 0 && 'border-0'
        } `}
      >
        <span>{todosList.length} items left</span>
        <div className="hidden md:block">
          <button
            className={`mx-2 ${filter === 'all' && 'text-blue-300'} `}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button
            className={`mx-2 ${filter === 'active' && 'text-blue-300'} `}
            onClick={() => handleFilterChange('active')}
          >
            Active
          </button>
          <button
            className={`mx-2 ${filter === 'completed' && 'text-blue-300'} `}
            onClick={() => handleFilterChange('completed')}
          >
            Completed
          </button>
        </div>
        <span
          className="hover:underline cursor-pointer"
          onClick={() => dispatch(clearCompletedTodo(todosList))}
        >
          Clear Completed
        </span>
      </div>
    </div>
  );
}

export default ViewTask;
