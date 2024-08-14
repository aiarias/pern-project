import { useEffect } from "react";
import TaskCard from "../components/tasks/TasksCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  if (tasks.length === 0)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <p className="text-2xl font-bold">No tasks available</p>
      </div>
    );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksPage;
