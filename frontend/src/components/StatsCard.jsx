import React from "react";

function StatsCard({ title, value, icon, color = "bg-gray-100", textColor = "text-gray-800", borderColor = "border-gray-200" }) {
  return (
    <div className={`flex items-center p-5 bg-white rounded-lg shadow-lg border-l-4 ${borderColor}`}>
      {icon && (
        <div className="mr-4 text-4xl">
          {icon}
        </div>
      )}
      <div>
        <div className={`text-sm font-medium text-gray-500`}>{title}</div>
        <div className={`text-3xl font-bold ${textColor}`}>{value}</div>
      </div>
    </div>
  );
}

export default StatsCard;