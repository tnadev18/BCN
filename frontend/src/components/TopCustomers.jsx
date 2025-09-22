import React from 'react';

const TopCustomers = ({ payments }) => {
  const customerPayments = payments.reduce((acc, payment) => {
    const customerName = payment.customer_id?.name || 'Unknown';
    if (acc[customerName]) {
      acc[customerName] += payment.amount_paid;
    } else {
      acc[customerName] = payment.amount_paid;
    }
    return acc;
  }, {});

  const sortedCustomers = Object.entries(customerPayments)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Top Customers</h3>
      <ul>
        {sortedCustomers.map(([name, amount]) => (
          <li key={name} className="flex justify-between items-center py-2 border-b">
            <span className="font-semibold">{name}</span>
            <span className="text-green-600 font-bold">₹{amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCustomers;
