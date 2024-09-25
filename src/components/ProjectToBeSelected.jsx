import { useContext } from "react";
import NoProjectSelected from "./NoProjectSelected";
import { ToDoContext } from "../store/todo-context";
import NewProject from "./NewProject";
import SelectedProject from "./SelectedProject";

const ProjectToBeSelected = () => {
  const { selectProjectId } = useContext(ToDoContext);

  return (
    <div className="w-2/3">
      {selectProjectId === undefined && <NoProjectSelected></NoProjectSelected>}
      {selectProjectId === null && <NewProject></NewProject>}
      {selectProjectId !== null && selectProjectId !== undefined && (
        <SelectedProject></SelectedProject>
      )}
    </div>
  );
};

export default ProjectToBeSelected;
