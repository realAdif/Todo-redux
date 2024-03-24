import sun_icon from '../assets/icon-sun.svg';

function Navbar() {
  return (
    <div className="text-white flex justify-between items-center my-4">
      <h1>TODO</h1>
      <img src={sun_icon} alt="sun_icon" />
    </div>
  );
}

export default Navbar;
