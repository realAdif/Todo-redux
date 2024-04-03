// components
import { useSelector } from 'react-redux';
import CreateTask from './components/CreateTask';
import Filter from './components/Filter';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ViewTask from './components/ViewTask';

export default function App() {
  return (
    <main>
      <div className="relative">
        <Header />
        <div className="w-full max-w-lg  mx-auto px-4 absolute top-20  left-1/2 transform -translate-x-1/2 ">
          <Navbar />
          <CreateTask />
          <ViewTask />
          <Filter />
        </div>
      </div>
    </main>
  );
}
