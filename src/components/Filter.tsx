export default function Filter() {
  return (
    <div className="md:hidden mb-6 w-full text-french-gray  bg-white dark:bg-very-dark-desaturated-blue mt-3 p-3 rounded flex justify-center">
      <button className="mx-2">All</button>
      <button className="mx-2">Active</button>
      <button className="mx-2">Completed</button>
    </div>
  );
}
