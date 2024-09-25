import "./App.css";
import SideBar from "./components/SideBar";
import ProjectToBeSelected from "./components/ProjectToBeSelected";
import ToDoContextProvider from "./store/todo-context";

function App() {
  return (
    <>
      <ToDoContextProvider>
        <div className="font-roboto flex h-screen ">
          <SideBar></SideBar>
          <ProjectToBeSelected></ProjectToBeSelected>
        </div>
      </ToDoContextProvider>
    </>
  );
}

export default App;
