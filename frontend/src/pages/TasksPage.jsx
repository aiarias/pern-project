import { useEffect, useState } from "react";
import { getAllTaskRequest } from "../api/tasks.api";
import TaskCard from "../components/tasks/TasksCard";
function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTaskRequest().then((response) => {
      setTasks(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
}

export default TasksPage;
