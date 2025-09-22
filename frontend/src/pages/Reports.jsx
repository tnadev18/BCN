import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

function Reports() {
  const [payments, setPayments] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    axios.get(`${API}/payments`).then(res => setPayments(res.data));
    axios.get(`${API}/customers`).then(res => setCustomers(res.data));
  }, []);

  // Filter payments by selected month and year
  const filteredPayments = payments.filter(p => {
    return (
      (!selectedMonth || p.month === selectedMonth) &&
      (!selectedYear || String(p.year) === String(selectedYear))
    );
  });

  // Calculate total paid for filtered payments
  const totalPaid = filteredPayments.reduce((sum, p) => sum + Number(p.amount_paid || 0), 0);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-purple-900">Payment Reports</h2>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <select
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
          className="border p-2 rounded w-full md:w-40"
        >
          <option value="">All Months</option>
          {[
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ].map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
        <input
          type="number"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
          placeholder="Year"
          className="border p-2 rounded w-full md:w-32"
        />
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-bold mb-4 text-purple-700">Filtered Payments</h3>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-purple-100">
              <th className="border px-2 py-1">Customer</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Month</th>
              <th className="border px-2 py-1">Year</th>
              <th className="border px-2 py-1">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map(p => (
              <tr key={p._id} className="hover:bg-purple-50">
                <td className="border px-2 py-1">{p.customer_id?.name || ""}</td>
                <td className="border px-2 py-1">{p.payment_date ? new Date(p.payment_date).toLocaleDateString() : ""}</td>
                <td className="border px-2 py-1">{p.month}</td>
                <td className="border px-2 py-1">{p.year}</td>
                <td className="border px-2 py-1">{p.amount_paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-right font-bold text-purple-900">
          Total Paid: ₹{totalPaid}
        </div>
      </div>
    </div>
  );
}

export default Reports;