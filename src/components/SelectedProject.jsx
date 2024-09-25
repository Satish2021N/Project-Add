import { useContext } from "react";
import { ToDoContext } from "../store/todo-context";
import Button from "./Button";
import Tasks from "./Tasks";

const SelectedProject = function () {
  const { selectedProject, onDeleteProject } = useContext(ToDoContext);
  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "2-digit",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <>
      <div className="w-[35rem] mt-10 px-4 ml-2">
        <header className="pb-4 mb-4 border-n-2 border-stone-300">
          {" "}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {selectedProject.title}
            </h1>
            <Button onClick={onDeleteProject}>Delete</Button>
          </div>
          <p className="mb-4 text-stone-400">{formattedDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {selectedProject.description}
          </p>
        </header>
        <Tasks></Tasks>
      </div>
    </>
  );
};
export default SelectedProject;
