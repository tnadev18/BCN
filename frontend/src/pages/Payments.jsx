import React, { useEffect, useState } from "react";
import axios from "axios";
import PaymentForm from "../components/PaymentForm";
import PaymentList from "../components/PaymentList";

const API = "http://localhost:5000/api";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [paymentForm, setPaymentForm] = useState({
    customer_id: "",
    payment_date: "",
    month: "",
    year: "",
    amount_paid: ""
  });

  useEffect(() => {
    axios.get(`${API}/payments`).then(res => setPayments(res.data));
    axios.get(`${API}/customers`).then(res => setCustomers(res.data));
  }, []);

  const handlePaymentChange = e =>
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });

  const handlePaymentSubmit = e => {
    e.preventDefault();
    axios.post(`${API}/payments`, paymentForm).then(res => {
      setPayments([...payments, res.data]);
      setPaymentForm({
        customer_id: "",
        payment_date: "",
        month: "",
        year: "",
        amount_paid: ""
      });
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-yellow-900">Manage Payments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PaymentForm
          formData={paymentForm}
          onChange={handlePaymentChange}
          onSubmit={handlePaymentSubmit}
          customers={customers}
        />
        <PaymentList payments={payments} />
      </div>
    </div>
  );
}

export default Payments;