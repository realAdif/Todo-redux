import crossIcon from '../assets/icon-cross.svg';

function ViewTask() {
  return (
    <div className="bg-white w-full mt-6">
      <div className="flex justify-between items-center py-4 px-4">
        <div>
          <input type="checkbox" name="" id="" />
          <span className="ml-2">Complete my task</span>
        </div>
        <button>
          <img src={crossIcon} alt="cross icon" />
        </button>
      </div>
    </div>
  );
}

export default ViewTask;
