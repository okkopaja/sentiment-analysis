import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeText = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `http://127.0.0.1:8001/api/analyze_review/?text=${encodeURIComponent(text)}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err) {
      setError("Cannot connect to Django backend.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", textAlign: "center", fontFamily: "Arial" }}>
      <h1>💬 Sentiment Analysis</h1>
      <textarea
        rows="5"
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      ></textarea>
      <br />
      <button
        onClick={analyzeText}
        disabled={loading}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
      )}

      {result && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f9f9f9",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <h3>Result</h3>
          <p><b>Language:</b> {result.language}</p>
          <p><b>Translated:</b> {result.translated}</p>
          <p><b>Sentiment:</b> {result.sentiment}</p>
          <p><b>Confidence:</b> {result.confidence}</p>
        </div>
      )}
    </div>
  );
}

export default App;
