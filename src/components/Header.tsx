import { useState } from 'react';
//Mobile
import bg_darkmobile from '../assets/bg-mobile-dark.jpg';
import bg_lightmobile from '../assets/bg-mobile-light.jpg';
//Desktop
import bg_dark from '../assets/bg-desktop-dark.jpg';
import bg_light from '../assets/bg-desktop-light.jpg';

function LightMode() {
  return <img src={bg_lightmobile} alt="bg" className="mx-auto w-full" />;
}
function DarkMode() {
  return <img src={bg_darkmobile} alt="bg" className="mx-auto w-full" />;
}

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      {isDarkMode ? (
        <div className="hidden md:block">
          <img src={bg_dark} alt="" />
        </div>
      ) : (
        <div className="block">
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
