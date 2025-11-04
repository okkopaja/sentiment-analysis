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
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 128, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#FF8000",
          letterSpacing: "1px"
        }}>
          SentiFlow
        </div>
        
        <div style={{ display: "flex", gap: "15px" }}>
          <button style={{
            padding: "10px 24px",
            fontSize: "15px",
            background: "transparent",
            color: "#ffffff",
            border: "1px solid #FF8000",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 128, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
          }}>
            Sign In
          </button>
          
          <button style={{
            padding: "10px 24px",
            fontSize: "15px",
            background: "#FF8000",
            color: "#000000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 20px rgba(255, 128, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "80px 40px",
        textAlign: "center"
      }}>
        {/* Hero Section */}
        <div style={{ marginBottom: "60px" }}>
          <h1 style={{
            fontSize: "56px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "20px",
            lineHeight: "1.2",
            background: "linear-gradient(135deg, #FF8000 0%, #FFA500 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Sentiment Analysis
          </h1>
          <p style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Analyze emotions, detect languages, and understand sentiment with cutting-edge AI technology
          </p>
        </div>

        {/* Input Section */}
        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 128, 0, 0.2)",
          borderRadius: "16px",
          padding: "40px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
        }}>
          <textarea
            rows="6"
            style={{
              width: "100%",
              padding: "20px",
              fontSize: "16px",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#ffffff",
              border: "1px solid rgba(255, 128, 0, 0.3)",
              borderRadius: "12px",
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
              transition: "border-color 0.3s ease",
              textAlign: "center",
              boxSizing: "border-box"  // ✅ Added this line
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here for analysis..."
            onFocus={(e) => e.target.style.borderColor = "#FF8000"}
            onBlur={(e) => e.target.style.borderColor = "rgba(255, 128, 0, 0.3)"}
          />
          
          <button
            onClick={analyzeText}
            disabled={loading}
            style={{
              marginTop: "24px",
              padding: "16px 48px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              background: loading ? "rgba(255, 128, 0, 0.5)" : "#FF8000",
              color: "#000000",
              border: "none",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              boxShadow: loading ? "none" : "0 4px 16px rgba(255, 128, 0, 0.3)"
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 24px rgba(255, 128, 0, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 16px rgba(255, 128, 0, 0.3)";
            }}
          >
            {loading ? "Analyzing..." : "Analyze Text"}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div style={{
            marginTop: "30px",
            padding: "20px",
            background: "rgba(255, 59, 48, 0.1)",
            border: "1px solid rgba(255, 59, 48, 0.3)",
            borderRadius: "12px",
            color: "#ff6b6b"
          }}>
            <p style={{ margin: 0, fontSize: "15px" }}>{error}</p>
          </div>
        )}

        {/* Result Display */}
        {result && (
          <div style={{
            marginTop: "40px",
            padding: "40px",
            background: "rgba(255, 128, 0, 0.05)",
            border: "1px solid rgba(255, 128, 0, 0.3)",
            borderRadius: "16px",
            textAlign: "left",
            backdropFilter: "blur(10px)"
          }}>
            <h3 style={{
              color: "#FF8000",
              fontSize: "24px",
              marginBottom: "24px",
              fontWeight: "600"
            }}>
              Analysis Results
            </h3>
            
            <div style={{ display: "grid", gap: "20px" }}>
              <ResultRow label="Language" value={result.language} />
              <ResultRow label="Translated Text" value={result.translated} />
              <ResultRow label="Sentiment" value={result.sentiment} />
              <ResultRow label="Confidence Score" value={result.confidence} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper Component for Result Rows
function ResultRow({ label, value }) {
  return (
    <div style={{
      padding: "16px",
      background: "rgba(0, 0, 0, 0.3)",
      borderRadius: "10px",
      border: "1px solid rgba(255, 128, 0, 0.1)"
    }}>
      <p style={{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "13px",
        marginBottom: "6px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        fontWeight: "500"
      }}>
        {label}
      </p>
      <p style={{
        color: "#ffffff",
        fontSize: "16px",
        margin: 0,
        fontWeight: "500"
      }}>
        {value}
      </p>
    </div>
  );
}

export default App;
