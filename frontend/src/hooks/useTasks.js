import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useTasks(token) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = useCallback(() => {
    if (!token) return;
    setLoading(true);
    axios.get("http://127.0.0.1:8000/api/tasks/", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, [token]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasks, loading, refetch: fetchTasks };
}
