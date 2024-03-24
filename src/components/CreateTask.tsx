function CreateTask() {
  return (
    <div className="bg-white py-2 rounded flex">
      <input className="rounded-full mx-2" type="checkbox" name="" id="" />
      <input
        className="w-full outline-none mr-2"
        type="text"
        name=""
        id=""
        placeholder="Create a new todo..."
      />
    </div>
  );
}

export default CreateTask;
