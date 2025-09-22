import React from 'react';

const RecentPayments = ({ payments }) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Recent Payments</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-center">Month/Year</th>
              <th className="py-3 px-6 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {payments.slice(-5).reverse().map(p => (
              <tr key={p._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {p.customer_id?.name || "N/A"}
                </td>
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
  );
};

export default RecentPayments;
