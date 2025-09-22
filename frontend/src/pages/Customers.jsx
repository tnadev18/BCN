import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";

const API = "http://localhost:5000/api";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [colonies, setColonies] = useState([]);
  const [customerForm, setCustomerForm] = useState({
    code: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
    colony_id: "",
    nuid_no: "",
    connection_date: "",
    connection_type: "",
    plan: "",
    monthly_charge: "",
    status: "Active"
  });

  useEffect(() => {
    axios.get(`${API}/customers`).then(res => setCustomers(res.data));
    axios.get(`${API}/colonies`).then(res => setColonies(res.data));
  }, []);

  const handleCustomerChange = e =>
    setCustomerForm({ ...customerForm, [e.target.name]: e.target.value });

  const handleCustomerSubmit = e => {
    e.preventDefault();
    axios.post(`${API}/customers`, customerForm).then(res => {
      setCustomers([...customers, res.data]);
      setCustomerForm({
        code: "",
        name: "",
        mobile: "",
        email: "",
        address: "",
        colony_id: "",
        nuid_no: "",
        connection_date: "",
        connection_type: "",
        plan: "",
        monthly_charge: "",
        status: "Active"
      });
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-green-900">Manage Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CustomerForm
          formData={customerForm}
          onChange={handleCustomerChange}
          onSubmit={handleCustomerSubmit}
          colonies={colonies}
        />
        <CustomerList customers={customers} />
      </div>
    </div>
  );
}

export default Customers;