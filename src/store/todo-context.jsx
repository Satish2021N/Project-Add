import { createContext } from "react";
import { useReducer } from "react";

export const ToDoContext = createContext({
  selectProjectId: "",
  projects: [],
  onAddProject: () => {},
  onCancelProject: () => {},
  onSaveProject: () => {},
  onSelectProject: () => {},
  selectedProject: "",
  onDeleteProject: () => {},
  onAddTask: () => {},
  tasks: [],
  onDeleteTask: () => {},
});

//Reducer Function
const ToDoReducer = function (state, action) {
  if (action.type === "ADD_PROJECT") {
    return {
      ...state,
      selectProjectId: null, //When user clicks on Add Project Button
    };
  }

  if (action.type === "CANCEL_PROJECT") {
    return {
      ...state,
      selectProjectId: undefined,
    };
  }

  if (action.type === "SAVE_PROJECT") {
    const newProject = {
      ...action.payload,
      projectId: Math.random(),
      tasks: [],
    };
    return {
      ...state,
      selectProjectId: undefined,
      projects: [...state.projects, newProject],
    };
  }

  if (action.type === "SELECT_PROJECT") {
    return {
      ...state,
      selectProjectId: action.payload,
    };
  }

  if (action.type === "DELETE_PROJECT") {
    return {
      ...state,
      projects: state.projects.filter(
        (project) => project.projectId !== state.selectProjectId
      ),
      selectProjectId: undefined,
    };
  }

  if (action.type === "ADD_TASK") {
    console.log("Handle ADD Task");
    return {
      ...state,
      projects: state.projects.map((project) => {
        if (project.projectId === state.selectProjectId) {
          return {
            ...project,
            tasks: [
              ...project.tasks,
              {
                taskId: Math.random(),
                taskName: action.payload,
              },
            ],
          };
        }
        return project;
      }),
    };
  }

  if (action.type === "DELETE_TASK") {
    console.log("Delete Task Pressed");
    return {
      ...state,
      projects: state.projects.map((project) => {
        if (project.projectId === state.selectProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter(
              (task) => task.taskId !== action.payload
            ),
          };
        }
        return project;
      }),
    };
  }
};

// eslint-disable-next-line react/prop-types
const ToDoContextProvider = function ({ children }) {
  const [toDoState, toDoDispatch] = useReducer(ToDoReducer, {
    selectProjectId: undefined, // When user hasn't add anything
    projects: [
      // {
      //   tasks: [{taskId, taskName}, {}, {}],
      //   title: "",
      //   description: "",
      //   dueDate: "",
      //   projectId: "",
      // },
    ],
  });

  const handleAddProject = function () {
    toDoDispatch({
      type: "ADD_PROJECT",
    });
  };

  const handleCancelProject = function () {
    toDoDispatch({
      type: "CANCEL_PROJECT",
    });
  };

  const handleSaveProject = function (projectData) {
    toDoDispatch({
      type: "SAVE_PROJECT",
      payload: projectData,
    });
  };

  const handleSelectProject = function (id) {
    toDoDispatch({
      type: "SELECT_PROJECT",
      payload: id,
    });
  };

  const handleDeleteProject = function () {
    toDoDispatch({
      type: "DELETE_PROJECT",
    });
  };

  const handleAddTask = function (task) {
    console.log(task);
    console.log("Handle Add Task");
    toDoDispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const handleDeleteTask = function (taskid) {
    toDoDispatch({
      type: "DELETE_TASK",
      payload: taskid,
    });
  };
  const projectSelected = toDoState.projects.find(
    (project) => project.projectId === toDoState.selectProjectId
  );

  const toDoValue = {
    projects: toDoState.projects,
    selectProjectId: toDoState.selectProjectId,
    onAddProject: handleAddProject,
    onCancelProject: handleCancelProject,
    onSaveProject: handleSaveProject,
    onSelectProject: handleSelectProject,
    selectedProject: projectSelected,
    onDeleteProject: handleDeleteProject,
    onAddTask: handleAddTask,
    onDeleteTask: handleDeleteTask,
    tasks: projectSelected ? projectSelected.tasks : [],
  };

  return (
    <ToDoContext.Provider value={toDoValue}>{children}</ToDoContext.Provider>
  );
};
export default ToDoContextProvider;
