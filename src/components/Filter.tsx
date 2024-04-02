export default function Filter() {
  return (
    <div className="md:hidden w-full bg-white dark:bg-very-dark-desaturated-blue mt-3 p-3 text-white rounded flex justify-center">
      <button className="mx-2">All</button>
      <button className="mx-2">Active</button>
      <button className="mx-2">Completed</button>
    </div>
  );
}
