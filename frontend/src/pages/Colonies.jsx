import React, { useEffect, useState } from "react";
import axios from "axios";
import ColonyForm from "../components/ColonyForm";
import ColonyList from "../components/ColonyList";

const API = "http://localhost:5000/api";

function Colonies() {
  const [colonies, setColonies] = useState([]);
  const [colonyForm, setColonyForm] = useState({
    colony_code: "",
    colony_name: "",
    description: ""
  });

  useEffect(() => {
    axios.get(`${API}/colonies`).then(res => setColonies(res.data));
  }, []);

  const handleColonyChange = e =>
    setColonyForm({ ...colonyForm, [e.target.name]: e.target.value });

  const handleColonySubmit = e => {
    e.preventDefault();
    axios.post(`${API}/colonies`, colonyForm).then(res => {
      setColonies([...colonies, res.data]);
      setColonyForm({ colony_code: "", colony_name: "", description: "" });
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-blue-900">Manage Colonies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ColonyForm
          formData={colonyForm}
          onChange={handleColonyChange}
          onSubmit={handleColonySubmit}
        />
        <ColonyList colonies={colonies} />
      </div>
    </div>
  );
}

export default Colonies;