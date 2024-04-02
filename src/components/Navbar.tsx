import sun_icon from '../assets/icon-sun.svg';
import moon_icon from '../assets/icon-moon.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slice/themeSlice';
import { RootState } from '../redux/store/store';

function Navbar() {
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  const isDarkMode = useSelector((state: RootState) => state.theme.theme);
  const icon = isDarkMode == 'light' ? moon_icon : sun_icon;

  return (
    <div className="text-white  flex justify-between items-center my-4 ">
      <h1>TODO</h1>
      <button onClick={handleToggleTheme}>
        <img src={icon} alt="icon" />
      </button>
    </div>
  );
}

export default Navbar;
