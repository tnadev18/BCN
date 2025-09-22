import React from "react";

function PaymentList({ payments }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
      <h3 className="text-lg font-bold mb-4 text-yellow-900">Payments</h3>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-yellow-100">
            <th className="border px-2 py-1">Customer</th>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Month</th>
            <th className="border px-2 py-1">Year</th>
            <th className="border px-2 py-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p._id} className="hover:bg-yellow-50">
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
  );
}

export default PaymentList;