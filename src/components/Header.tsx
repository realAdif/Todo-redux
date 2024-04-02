import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
//Mobile
import bg_darkmobile from '../assets/bg-mobile-dark.jpg';
import bg_lightmobile from '../assets/bg-mobile-light.jpg';
//Desktop
import bg_dark from '../assets/bg-desktop-dark.jpg';
import bg_light from '../assets/bg-desktop-light.jpg';

export default function Header() {
  const themeMode = useSelector((state: RootState) => state.theme.theme);
  console.log(themeMode);
  return (
    <div>
      {themeMode === 'dark' ? (
        <div>
          <img
            src={bg_dark}
            alt="/"
            className="w-full hidden md:block max-h-[400px]"
          />
          <img src={bg_darkmobile} alt="/" className="w-full md:hidden" />
        </div>
      ) : (
        <div>
          <img
            src={bg_light}
            alt=""
            className="w-full hidden md:block max-h-[400px]"
          />
          <img src={bg_lightmobile} alt="/" className="w-full md:hidden" />
        </div>
      )}
    </div>
  );
}
