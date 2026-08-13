import { useState } from "react";
import Login from "./components/Login";
import TaskList from "./components/TaskList";

function App() {
  const [token, setToken] = useState(null);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>TaskFlow</h1>
      {!token ? (
        <Login onLogin={setToken} />
      ) : (
        <>
          <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
            Log Out
          </button>
          <TaskList token={token} />
        </>
      )}
    </div>
  );
}

export default App;
