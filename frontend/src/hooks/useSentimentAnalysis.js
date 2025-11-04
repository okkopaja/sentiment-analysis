import { useState } from "react";
import { API_CONFIG, MESSAGES } from "../constants/config";

export const useSentimentAnalysis = () => {
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
      const url = new URL(
        API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.ANALYZE
      );
      url.searchParams.append("text", text);

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err) {
      setError(MESSAGES.ERROR_BACKEND);
    } finally {
      setLoading(false);
    }
  };

  return { text, setText, result, loading, error, analyzeText };
};
