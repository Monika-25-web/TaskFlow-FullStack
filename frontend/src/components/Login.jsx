import { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/auth/login?username=${username}&password=${password}`
      );
      onLogin(response.data.access_token);
    } catch (error) {
      alert("Login failed. Check your username/password.");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
