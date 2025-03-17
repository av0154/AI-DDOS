import React, { useState } from "react";

const DetectAttack = () => {
  const [features, setFeatures] = useState("");
  const [result, setResult] = useState("");

  const handleDetect = async () => {
    try {
      const response = await fetch("/api/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: features.split(",").map(Number) }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      console.error("Error detecting attack:", err);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3"> Detect Attack</h2>
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Enter traffic data (e.g., 1,0,3,0.5,100)"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />
      <button
        className="mt-3 bg-blue-500 text-white p-2 rounded"
        onClick={handleDetect}
      >
        Analyze
      </button>
      {result && <p className="mt-3 text-lg font-bold">{result}</p>}
    </div>
  );
};

export default DetectAttack;
