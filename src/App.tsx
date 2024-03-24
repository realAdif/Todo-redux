import CreateTask from './components/CreateTask';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div className=" relative">
        <Header />
        <main className=" max-w-screen-md absolute  bottom-12 left-0 right-0 m-auto">
          <Navbar />
          <CreateTask />
        </main>
      </div>
    </div>
  );
}
export default App;
