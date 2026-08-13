function TaskCard({ task }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px",
      marginBottom: "8px"
    }}>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default TaskCard;
