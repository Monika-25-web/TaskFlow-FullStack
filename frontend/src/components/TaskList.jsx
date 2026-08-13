import { useState } from "react";
import axios from "axios";
import { useTasks } from "../hooks/useTasks";
import TaskCard from "./TaskCard";

function TaskList({ token }) {
  const { tasks, loading, refetch } = useTasks(token);
  const [newTitle, setNewTitle] = useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/tasks/?title=${encodeURIComponent(newTitle)}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewTitle("");
      refetch();
    } catch (error) {
      alert("Failed to add task.");
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h2>My Tasks</h2>
      <form onSubmit={handleAddTask} style={{ marginBottom: "12px" }}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New task title"
        />
        <button type="submit">Add Task</button>
      </form>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
}

export default TaskList;
