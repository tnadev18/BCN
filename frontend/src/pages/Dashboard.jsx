import React, { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "../components/StatsCard";
import { UserGroupIcon, HomeIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const API = "http://localhost:5000/api";

function Dashboard() {
  const [colonies, setColonies] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get(`${API}/colonies`).then(res => setColonies(res.data));
    axios.get(`${API}/customers`).then(res => setCustomers(res.data));
    axios.get(`${API}/payments`).then(res => setPayments(res.data));
  }, []);

  // Calculate total payments
  const totalPaid = payments.reduce((sum, p) => sum + Number(p.amount_paid || 0), 0);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <StatsCard
          title="Colonies"
          value={colonies.length}
          icon={<HomeIcon className="h-8 w-8 text-blue-700" />}
          color="bg-blue-100"
          textColor="text-blue-900"
        />
        <StatsCard
          title="Customers"
          value={customers.length}
          icon={<UserGroupIcon className="h-8 w-8 text-green-700" />}
          color="bg-green-100"
          textColor="text-green-900"
        />
        <StatsCard
          title="Total Payments"
          value={`₹${totalPaid}`}
          icon={<CurrencyDollarIcon className="h-8 w-8 text-yellow-700" />}
          color="bg-yellow-100"
          textColor="text-yellow-900"
        />
      </div>
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-700">Recent Payments</h3>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Customer</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Month</th>
              <th className="border px-2 py-1">Year</th>
              <th className="border px-2 py-1">Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.slice(-5).reverse().map(p => (
              <tr key={p._id} className="hover:bg-gray-50">
                <td className="border px-2 py-1">{p.customer_id?.name || ""}</td>
                <td className="border px-2 py-1">{p.payment_date ? new Date(p.payment_date).toLocaleDateString() : ""}</td>
                <td className="border px-2 py-1">{p.month}</td>
                <td className="border px-2 py-1">{p.year}</td>
                <td className="border px-2 py-1">{p.amount_paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;