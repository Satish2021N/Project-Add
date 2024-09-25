import { useContext, useState } from "react";
import Button from "./Button";
import { ToDoContext } from "../store/todo-context";
const InputTasks = function () {
  const { onAddTask } = useContext(ToDoContext);
  const [inputValue, setInputValue] = useState();

  const handleInputValue = function (event) {
    setInputValue(event.target.value);
  };

  const handleAdd = function () {
    onAddTask(inputValue);
    setInputValue("")
  };

  return (
    <>
      <div className="flex justify-between mt-3">
        <input
          type="text"
          className="py-1 px-2 border-stone-600 border-b-2 bg-stone-400 text-stone-100 focus:outline-none focus:border-stone-600 w-2/3"
          onChange={handleInputValue}
          value={inputValue}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>
    </>
  );
};
export default InputTasks;
