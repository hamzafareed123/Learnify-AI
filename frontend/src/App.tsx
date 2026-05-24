import React from "react";
import { useState } from "react";
import Form from "./components/form";
import ExplanationCard from "./components/ExplanationCard";
import AppContext from "./context/generateContext";

function App() {
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const [loading,setLoading]= useState(false);
  const [error,setError]= useState("")


  return (
    <AppContext.Provider value={{ topic, setTopic, output, setOutput, loading, setLoading, error, setError }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 text-slate-900 px-6 py-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-200/50">
          <Form />
          <div className="mt-10">
            <ExplanationCard />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
