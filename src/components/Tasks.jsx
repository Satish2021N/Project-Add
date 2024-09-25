import InputTasks from "./InputTasks";
import { ToDoContext } from "../store/todo-context";
import { useContext } from "react";
import Button from "./Button";

const Tasks = function () {
  const { tasks, onDeleteTask } = useContext(ToDoContext);
  console.log(tasks);
  console.log("Type of Tasks", typeof tasks);
  return (
    <>
      <section>
        <h2 className="text-xl uppercase font-bold">Tasks</h2>
        <InputTasks></InputTasks>
        <ul className="mt-3">
          {tasks.length > 0 &&
            tasks.map(
              (task) => (
                <li
                  key={task.taskId}
                  className="flex flex-row items-center justify-between mt-2"
                >
                  {task.taskName}{" "}
                  <Button clearButton onClick={() => onDeleteTask(task.taskId)}>
                    {" "}
                    Clear
                  </Button>
                </li>
              )
              // {tasks?.map((task) =>  <li key={task.taskId}>{task.taskName}</li>
              //? checks if the array is empty or not, value exits garcah ki gardaina
            )}
        </ul>
      </section>
    </>
  );
};
export default Tasks;
