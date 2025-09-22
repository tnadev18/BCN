import React from "react";

function StatsCard({ title, value, icon, color = "bg-gray-100", textColor = "text-gray-800" }) {
  return (
    <div className={`flex items-center p-4 rounded-xl shadow-md ${color}`}>
      {icon && (
        <div className="mr-4 text-3xl">
          {icon}
        </div>
      )}
      <div>
        <div className={`text-lg font-semibold ${textColor}`}>{title}</div>
        <div className={`text-2xl font-bold ${textColor}`}>{value}</div>
      </div>
    </div>
  );
}

export default StatsCard;