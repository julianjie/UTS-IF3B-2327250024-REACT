// src/components/Fakultas/Create.jsx
import React, { useState } from "react"; // Import React dan useState untuk menggunakan state hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreateFakultas() {
  const [tim1, setTim1] = useState("");
  const [tim2, setTim2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(""); 
    setSuccess(""); 

    if (tim1.trim() === "") {
      setError("Nama Tim is required");
      return; 
    }
    try {
      const response = await axios.post(
        "https://uts-if-3-b-2327250024-api.vercel.app/api/api/meetings",
        {
          tim_1: tim1,
          tim_2 : tim2,
        }
      );

      
      if (response.status === 201) {
        
        setSuccess("Meeting created successfully!");
        setTim1(""); 
        setTim2(""); 
      } else {
        
        setError("Failed to create Meeting");
      }
    } catch (error) {
    
      setError("An error occurred while creating Meeting");
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Meeting</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nama Tim 1</label>
          <input
            type="text"
            className="form-control"
            id="tim1"
            value={tim1} 
            onChange={(e) => setTim1(e.target.value)} 
            placeholder="Enter Tim 1 Name" 
          /> 
        </div>
        <div className="mb-3">
          <label className="form-label">Nama Tim 2</label>

          <input
            type="text"
            className="form-control"
            id="tim 2"
            value={tim2}
            onChange={(e) => setTim2(e.target.value)} 
            placeholder="Enter Tim 2 Name" 
          /> 
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
