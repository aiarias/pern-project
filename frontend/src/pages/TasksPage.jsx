import { useEffect } from "react";
import TaskCard from "../components/tasks/TasksCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();
  
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksPage;
