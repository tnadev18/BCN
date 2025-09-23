import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Colonies from "./pages/Colonies";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import PaymentHistory from "./pages/PaymentHistory";

function App() {
  // For header stats, you can fetch and pass counts if needed.
  // Here, header is static for simplicity.
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10">
          {/* Optionally, you can add <Header /> here and pass stats as props */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/colonies" element={<Colonies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/payment-history/:customerId" element={<PaymentHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
