import React from "react";
import Navbar from "./components/Navbar";
import InputCard from "./components/InputCard";
import ResultCard from "./components/ResultCard";
import EmptyState from "./components/EmptyState";
import { useSentimentAnalysis } from "./hooks/useSentimentAnalysis";
import { baseStyles, COLORS } from "./constants/styles";

function App() {
  const { text, setText, result, loading, error, analyzeText } =
    useSentimentAnalysis();

  return (
    <div style={baseStyles.container}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        {/* Hero Section */}
        <div style={{ marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: COLORS.WHITE,
              marginBottom: "20px",
              lineHeight: "1.2",
              background: `linear-gradient(135deg, ${COLORS.PRIMARY} 0%, ${COLORS.SECONDARY} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sentiment Analysis
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: COLORS.TEXT_MUTED,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Analyze emotions, detect languages, and understand sentiment with
            cutting-edge AI technology
          </p>
        </div>

        {/* Error Display - Full Width */}
        {error && (
          <div
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "rgba(255, 59, 48, 0.1)",
              border: "1px solid rgba(255, 59, 48, 0.3)",
              borderRadius: "12px",
              color: COLORS.ERROR,
            }}
          >
            <p style={{ margin: 0, fontSize: "15px" }}>{error}</p>
          </div>
        )}

        {/* Side-by-Side Container */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Input Card */}
          <InputCard
            text={text}
            setText={setText}
            loading={loading}
            onAnalyze={analyzeText}
          />

          {/* Results or Empty State */}
          {result ? <ResultCard result={result} /> : <EmptyState />}
        </div>
      </div>
    </div>
  );
}

export default App;
