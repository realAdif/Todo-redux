import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoListSlice';

function CreateTask() {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleAddTodo = () => {
    if (taskText.trim()) {
      // Check if there's actual text
      dispatch(addTodo(taskText));
      setTaskText(''); // Clear input after adding
    }
  };

  return (
    <div className="bg-white py-2 rounded flex">
      <input className="rounded-full mx-2" type="checkbox" name="" id="" />
      <input
        className="w-full outline-none mr-2"
        type="text"
        placeholder="Create a new todo..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAddTodo();
        }}
      />
    </div>
  );
}

export default CreateTask;
