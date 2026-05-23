import React, { useState } from 'react'

 const Form = () => {
      const [topic, setTopic] = useState("");
      const [output,setOutput]= useState("");
      
    
       const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Topic:", topic);
        const backendUrl = import.meta.env.VITE_BACKEND_URL;

        const result =  await fetch (`${backendUrl}/api/generate`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                topic: topic
            })
        })

        console.log("Api Response", result);

        const data = await result.json();
        console.log("Prased Data", data.content)
        setOutput(data.content);
      };
  return (
    <div>
         <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Learnify AI
         </h1>
            <p className="mt-4 text-lg text-slate-700">
              Enter your Topic and get Explanation , quiz Question and Flash Cards
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex gap-4">
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                type="text"
                placeholder="Enter Your Topic"
                className="mt-4 rounded border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
            <div className="mt-6 rounded border border-slate-300 bg-slate-50 p-4 text-slate-900"></div>
              {output}
            </div>
  )
}

export default Form