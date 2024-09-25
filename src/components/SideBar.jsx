import { useContext } from "react";
import { ToDoContext } from "../store/todo-context";
import Button from "./Button";
const SideBar = function () {
  const { onAddProject, projects, onSelectProject } = useContext(ToDoContext);
  console.log("Type of Project", typeof(projects))
  console.log(projects)
  return (
    <>
      <div className="bg-stone-600 w-1/3 md:w-72 flex flex-col items-start px-6 py-8 text-stone-100 rounded-tr-xl gap-4">
        <Button onClick={onAddProject}>+ Add Project </Button>
        <h1 className="uppercase"> Projects </h1>
        <ul>
          {projects.map((project) => (
            <li key={project.projectId} className="mt-2">
              {" "}
              <Button
                project
                onClick={() => onSelectProject(project.projectId)}
              >
                {project.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SideBar;
