import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store/store';
import {
  removeTodo,
  clearCompletedTodo,
  setFilter,
  Todo,
  reorderTodos,
} from '../redux/slice/todoListSlice';
import { Reorder } from 'framer-motion';
import { useState } from 'react';
import Task from './Task';

function ViewTask() {
  const filter = useSelector((state: RootState) => state.todoList.filter);
  const todosList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleFilterChange = (newFilter: 'all' | 'active' | 'completed') => {
    dispatch(setFilter(newFilter));
  };

  const filterTodos = todosList.filter((todo: Todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  const [taskFilter, setTaskFilter] = useState(filterTodos);
  return (
    <div className="bg-white  dark:bg-very-dark-desaturated-blue text-black dark:text-white  w-full mt-6 rounded drop-shadow-lg">
      <div className="overflow-y-hidden">
        <Reorder.Group onReorder={setTaskFilter} values={filterTodos}>
          {taskFilter.map((todo: Todo) => (
            <Task
              key={todo.id}
              todo={todo}
              onClick={() => handleRemoveTodo(todo.id)}
            />
          ))}
        </Reorder.Group>
      </div>
      <div
        className={`flex justify-between text-xs  p-4 ${
          todosList.length <= 0 && 'border-0'
        }`}
      >
        <span>{filterTodos.length} items left</span>
        <div className="hidden md:block">
          <button
            className={`mx-2 ${filter === 'all' && 'text-blue-300'}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button
            className={`mx-2 ${filter === 'active' && 'text-blue-300'}`}
            onClick={() => handleFilterChange('active')}
          >
            Active
          </button>
          <button
            className={`mx-2 ${filter === 'completed' && 'text-blue-300'}`}
            onClick={() => handleFilterChange('completed')}
          >
            Completed
          </button>
        </div>
        <span
          className="hover:underline cursor-pointer"
          onClick={() => dispatch(clearCompletedTodo())}
        >
          Clear Completed
        </span>
      </div>
    </div>
  );
}

export default ViewTask;
