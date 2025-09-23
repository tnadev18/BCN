import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/api";

function PaymentHistory() {
  const { customerId } = useParams();
  const [payments, setPayments] = useState([]);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get(`${API}/customers/${customerId}`).then(res => setCustomer(res.data));
    axios.get(`${API}/payments/history/${customerId}`).then(res => setPayments(res.data));
  }, [customerId]);

  return (
    <div className="p-8">
      <Link to="/customers" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Customers</Link>
      {customer && (
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Payment History for {customer.name}
        </h2>
      )}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-center">Month/Year</th>
                <th className="py-3 px-6 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {payments.map(p => (
                <tr key={p._id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">
                    {p.payment_date ? new Date(p.payment_date).toLocaleDateString() : "N/A"}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {p.month}/{p.year}
                  </td>
                  <td className="py-3 px-6 text-right font-semibold">
                    ₹{p.amount_paid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
