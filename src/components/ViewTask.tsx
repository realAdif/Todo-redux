import crossIcon from '../assets/icon-cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/slice/todoListSlice';
import Checkbox from './Checkbox';

function ViewTask() {
  const todos = useSelector((state) => state.todoList.todos);
  const dispatch = useDispatch();
  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="bg-white w-full mt-6 rounded-md drop-shadow-lg">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center py-4 px-4  even:border-y border-french-gray"
        >
          <div className="flex">
            <Checkbox />
            <span className="ml-2">{todo.title}</span>
          </div>
          <button onClick={() => handleRemoveTodo(todo.id)}>
            <img src={crossIcon} alt="cross icon" />
          </button>
        </div>
      ))}
      <div className="flex justify-between text-xs text-french-gray p-4 border-t border-french-gray ">
        <p>{todos.length} items left</p>
        <p>Clear Completed</p>
      </div>
    </div>
  );
}

export default ViewTask;
