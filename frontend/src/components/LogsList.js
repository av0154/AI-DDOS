import React, { useEffect, useState } from "react";

const LogsList = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/api/logs")
      .then(res => res.json())
      .then(data => setLogs(data))
      .catch(err => console.error("Error fetching logs:", err));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3"> Website Logs</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Timestamp</th>
            <th className="border p-2">Source IP</th>
            <th className="border p-2">HTTP Code</th>
            <th className="border p-2">SQL Injection</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{new Date(log.timestamp).toLocaleString()}</td>
              <td className="border p-2">{log.sourceIP}</td>
              <td className="border p-2">{log.httpCode}</td>
              <td className="border p-2">{log.sqlInjectionAttempt ? " Yes" : " No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsList;
