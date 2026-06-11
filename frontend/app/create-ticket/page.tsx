"use client";

import { useState } from "react";
import axios from "axios";

export default function CreateTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");

  const submitTicket = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/tickets/create",
        {
          title,
          description,
          status,
        }
      );

      alert(
        `${res.data.message}\nCategory: ${res.data.category}`
      );
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <a href="/create-ticket">Create Ticket</a>
        <a href="/dashboard">Dashboard</a>
      </div>

      <h1>Create Ticket</h1>

      <br />

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>

      <br />
      <br />

      <button onClick={submitTicket}>
        Submit Ticket
      </button>
    </div>
  );
}