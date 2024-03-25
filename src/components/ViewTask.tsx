import crossIcon from '../assets/icon-cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/slice/todoListSlice';

function ViewTask() {
  const todos = useSelector((state) => state.todoList.todos);
  const dispatch = useDispatch();
  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="bg-white w-full mt-6">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center py-4 px-4"
        >
          <div>
            <input type="checkbox" name="" id="" />
            <span className="ml-2">{todo.title}</span>
          </div>
          <button onClick={() => handleRemoveTodo(todo.id)}>
            <img src={crossIcon} alt="cross icon" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewTask;
