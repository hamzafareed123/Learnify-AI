import React from "react";
import { useState } from "react";
import Form from "./components/form";
import ExplanationCard from "./components/ExplanationCard";

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 text-slate-900 px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-200/50">
      <Form/>   
      <div className="mt-10">
        <ExplanationCard/>
          </div>    
      </div>
    </div>
  );
}

export default App;
