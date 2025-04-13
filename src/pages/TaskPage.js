import { useEffect, useState } from "react";
import { FaCheckCircle, FaEdit, FaTrash, FaUndoAlt } from "react-icons/fa";
import "./TaskPage.css";

function TaskPage() {
  const [newTask, setNewTask] = useState(""); // for storing value typed into the input field.
  
  const [tasks, setTasks] = useState([]);     // for storing all the tasks in backend
  const [editIndex, setEditIndex] = useState(null);// for storing index of task edited

  //const apiURL = "http://localhost:5000/tasks";  // this is the base URL to connect to your backend
  const apiURL = "https://task-manger-backend-rho.vercel.app/tasks";

  // here we fetching our all tasks from backend
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);


  // when we click add or adit new task will be add
  const addTask = () => {
    if (newTask.trim() === "") return;          // Prevents adding empty tasks.

    const taskObject = { text: newTask, completed: false };

    if (editIndex !== null) {              // We update the task at editIndex, then update the state.
      const updatedTasks = [...tasks];     // get all tasks in updated task
      updatedTasks[editIndex].text = newTask;   // from edit index we find our task then edit or changed it
      setTasks(updatedTasks);           // set our task again

      fetch(`${apiURL}/${editIndex}`, {    // Sends the updated task to the backend.
        method: "PUT",                     // PUT is method that we use for Update something
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTasks[editIndex]),     // here is data which want to send backend
      });

      setEditIndex(null);

    } else {                       // Sends a new task to the backend and adds it to the list.
      fetch(apiURL, {
        method: "POST",            // Post is method that we are used Add something new
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskObject),       // here is data which want to send backend
      }).then(() => setTasks([...tasks, taskObject])); // After the task is successfully added (POST done), update the UI state by adding it to the tasks array."
    }

    setNewTask("");
  };

  // Handle pressing the Enter key to add a task
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (index) => {
    fetch(`${apiURL}/${index}`, { method: "DELETE" }).then(() => {
      const updated = tasks.filter((_, i) => i !== index);     // Removes the task from the UI using filter.
      setTasks(updated);
    });
  };

  // when we click on edit
  const handleEdit = (index) => { 
    setNewTask(tasks[index].text);   // Prefills the input with selected task then its accessable to edit in input feild
    setEditIndex(index);      // Sets the index of task to be edited, The editIndex gets set so the app knows we are now in edit mode.
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];    // We create a copy of the current tasks array (so we don’t directly mutate the state).
    updatedTasks[index].completed = !updatedTasks[index].completed;   // this line toggle completed value, if its true then false, if it falsethen make it true
    setTasks(updatedTasks);

    fetch(`${apiURL}/${index}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTasks[index]),
    });
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <h2>Manage Your Tasks</h2>

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyPress}                // Detect the Enter key press
          />
          <button onClick={addTask}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul className="task-list">
          {tasks.map((task, i) => (
            <li key={i} className="task-item">
              <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>

              <div className="icon-group">
                <button onClick={() => toggleComplete(i)} title="Complete">
                  {task.completed ? (
                    <FaUndoAlt className="icon undo" />
                  ) : (
                    <FaCheckCircle className="icon complete" />
                  )}
                </button>
                <button onClick={() => handleEdit(i)} title="Edit">
                  <FaEdit className="icon edit" />
                </button>
                <button onClick={() => handleDelete(i)} title="Delete">
                  <FaTrash className="icon delete" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskPage;
