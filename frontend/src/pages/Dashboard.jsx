import React, { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "../components/StatsCard";
import Header from "../components/Header";
import PaymentsChart from "../components/PaymentsChart";
import TopCustomers from "../components/TopCustomers";
import RecentPayments from "../components/RecentPayments";
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
      <Header
        coloniesCount={colonies.length}
        customersCount={customers.length}
        paymentsCount={payments.length}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <StatsCard
          title="Total Colonies"
          value={colonies.length}
          icon={<HomeIcon className="h-10 w-10 text-blue-500" />}
          borderColor="border-blue-500"
          textColor="text-gray-800"
        />
        <StatsCard
          title="Total Customers"
          value={customers.length}
          icon={<UserGroupIcon className="h-10 w-10 text-green-500" />}
          borderColor="border-green-500"
          textColor="text-gray-800"
        />
        <StatsCard
          title="Total Revenue"
          value={`₹${totalPaid.toLocaleString()}`}
          icon={<CurrencyDollarIcon className="h-10 w-10 text-red-500" />}
          borderColor="border-red-500"
          textColor="text-gray-800"
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <PaymentsChart payments={payments} />
        </div>
        <div>
          <TopCustomers payments={payments} />
        </div>
      </div>
      <RecentPayments payments={payments} />
    </div>
  );
}

export default Dashboard;