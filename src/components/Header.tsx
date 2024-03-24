//Mobile
import bg_darkmobile from '../assets/bg-mobile-dark.jpg';
import bg_lightmobile from '../assets/bg-mobile-light.jpg';
//Desktop
import bg_dark from '../assets/bg-desktop-dark.jpg';
import bg_light from '../assets/bg-desktop-light.jpg';

function lightMode() {
  return <img src={bg_lightmobile} alt="bg" className="mx-auto w-full" />;
}
function darkMode() {
  return <img src={bg_darkmobile} alt="bg" className="mx-auto w-full" />;
}

export default function Header() {
  return <img src={bg_dark} alt="bg" className="mx-auto w-full" />;
}
