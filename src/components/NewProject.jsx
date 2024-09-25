import { useContext, useRef } from "react";
import { ToDoContext } from "../store/todo-context";
import Button from "./Button";
import InputHolder from "./InputHolder";
import Modal from "./Modal";
const NewProject = function () {
  const { onCancelProject, onSaveProject } = useContext(ToDoContext);

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  const onSave = function () {
    console.log("BUtton Pressed Saved");
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //Validation
    if (
      enteredTitle.trim() === " " ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      dialog.current.open();
      console.log("Null Values");
      
      return;
    }

    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={dialog}>
        <div className="flex flex-col gap-2 mb-3">
          <h2 className="font-bold text-xl text-stone-700 ">Input Invalid</h2>
          <p className="font-medium text-base text-stone-600 ">
            Oops looks like you forgot to enter a value
          </p>
          <p className="font-medium text-base text-stone-600 ">
            Please make sure you provide a valid value for every input value
          </p>
        </div>
      </Modal>
      <div className="flex flex-col px-6 py-8 gap-2">
        <InputHolder label="Enter Title" type="text" ref={title}></InputHolder>
        <InputHolder
          label="Enter Description"
          textarea
          ref={description}
        ></InputHolder>
        <InputHolder label="Enter Date" type="date" ref={dueDate}></InputHolder>
        <menu className="flex justify-start gap-4 mt-4">
          <Button onClick={onSave}>Save</Button>
          <Button onClick={onCancelProject}>Cancel</Button>
        </menu>
      </div>
    </>
  );
};
export default NewProject;
