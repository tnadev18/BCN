import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PaymentsChart = ({ payments }) => {
  const data = payments.reduce((acc, payment) => {
    const month = new Date(payment.payment_date).toLocaleString('default', { month: 'short' });
    const year = new Date(payment.payment_date).getFullYear();
    const monthYear = `${month} ${year}`;
    const existing = acc.find(item => item.name === monthYear);
    if (existing) {
      existing.amount += payment.amount_paid;
    } else {
      acc.push({ name: monthYear, amount: payment.amount_paid });
    }
    return acc;
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Payments Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentsChart;
