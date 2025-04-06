import React, { useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

function App() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/analyze/`, formData);
      setResponse(res.data);
    } catch (err) {
      console.error("Error:", err);
      setResponse({ error: "Failed to analyze RFP." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-red-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">RFP AI Analyzer</h1>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <br />
      <button
        onClick={handleFileUpload}
        disabled={!file || loading}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {response && (
        <pre className="mt-6 bg-white text-left p-4 rounded shadow-md">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
