import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/slice/todoListSlice';
import { RootState } from '../redux/store/store';
export default function Filter() {
  const filter = useSelector((state: RootState) => state.todoList.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter: 'all' | 'active' | 'completed') => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="md:hidden mb-6 w-full text-french-gray  bg-white dark:bg-very-dark-desaturated-blue mt-3 p-3 rounded flex justify-center">
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
  );
}
