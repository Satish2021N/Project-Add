import { useContext } from "react";
import image from "../assets/no-projects.png";
import Button from "./Button";
import { ToDoContext } from "../store/todo-context";

const NoProjectSelected = function () {
  const { onAddProject } = useContext(ToDoContext);
  return (
    <>
      <div className="flex flex-col gap-2 items-center w-full h-full justify-center">
        <img src={image} alt="" className="w-32 h-32" />
        <h1 className="text-xl font-bold text-red-900"> No Project Selected</h1>
        <div className="flex flex-col items-center justify-start gap-2">
          <p className="font-semibold">Please Select a Project to Continue</p>
          <Button onClick={onAddProject}>+ Add Project</Button>
        </div>
      </div>
    </>
  );
};
export default NoProjectSelected;
