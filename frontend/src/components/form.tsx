import React from "react";
import AppContext from "../context/generateContext";

const Form = () => {
  const { topic, setTopic, setOutput, loading, setLoading, setError } =
    React.useContext(AppContext);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!topic.trim()) {
      setError("Please enter a topic first");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await fetch(`${backendUrl}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      if (!result.ok) throw new Error(`Server error: ${result.status}`);

      const data = await result.json();
      if (!data.content) throw new Error("No content returned from AI");

      setOutput(data.content);
      setTopic("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Learnify <span className="text-blue-500">AI</span>
        </h1>
        <p className="mt-2 text-slate-500">
          Enter any topic and get explanation, quiz & flashcards instantly
        </p>
      </div>

    
      <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          type="text"
          placeholder="e.g. Photosynthesis, World War 2, Quantum Physics..."
          className="
            flex-1 bg-transparent px-3 py-2 text-slate-900
            placeholder:text-slate-400
            focus:outline-none
          "
        
        />
        <button
          disabled={loading}
          type="button"
          onClick={handleSubmit}
          className="
            rounded-xl bg-blue-500 px-6 py-2 font-medium text-white
            transition-all duration-200
            hover:bg-blue-600
            active:scale-95
            disabled:cursor-not-allowed disabled:opacity-50
          "
      
        >
          {loading ? (
            <span className="flex items-center gap-2">
              {/* Spinning circle */}
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Generating...
            </span>
          ) : (
            "Generate →"
          )}
        </button>
      </div>
    </div>
  );
};

export default Form;