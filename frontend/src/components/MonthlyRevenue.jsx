import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

function MonthlyRevenue() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);

  useEffect(() => {
    axios.get(`${API}/payments`).then(res => {
      const payments = res.data;
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const monthlyPayments = payments.filter(p => {
        const paymentDate = new Date(p.payment_date);
        return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;
      });
      const totalRevenue = monthlyPayments.reduce((sum, p) => sum + p.amount_paid, 0);
      setMonthlyRevenue(totalRevenue);
    });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800">This Month's Revenue</h3>
      <p className="text-4xl font-bold text-green-600">
        ₹{monthlyRevenue.toLocaleString()}
      </p>
    </div>
  );
}

export default MonthlyRevenue;
