import React, { useEffect, useState } from "react";

const AttacksList = () => {
  const [attacks, setAttacks] = useState([]);

  useEffect(() => {
    fetch("/api/attacks")
      .then(res => res.json())
      .then(data => setAttacks(data))
      .catch(err => console.error("Error fetching attacks:", err));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3"> Detected Attacks </h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-red-200">
            <th className="border p-2">Timestamp</th>
            <th className="border p-2">IP Address</th>
            <th className="border p-2">Attack Type</th>
          </tr>
        </thead>
        <tbody>
          {attacks.map((attack, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{new Date(attack.timestamp).toLocaleString()}</td>
              <td className="border p-2">{attack.ipAddress}</td>
              <td className="border p-2">{attack.attackType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttacksList;
