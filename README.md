# Cable Billing Dashboard

A modern, responsive office dashboard for managing cable billing operations, including colonies, customers, and payments. Built with a MERN stack (MongoDB, Express, React, Node.js), this project provides a clean UI and modular code structure for easy maintenance and scalability.

---

## Features

- **Dynamic Dashboard Overview:**
  - View key stats (total colonies, total customers, total revenue).
  - A dynamic bar chart visualizes payments over time.
  - See a list of top customers by payment amount.
  - View recent payment activity at a glance.

- **Colonies Management:**  
  - Add, view, and manage colonies.

- **Customers Management:**  
  - Add, view, and manage customers, linked to colonies.

- **Payments Management:**  
  - Record and view payments, linked to customers.

- **Reports:**  
  - Filter payments by month and year, and see totals.

- **Settings:**  
  - Placeholder for company and admin settings.

- **Responsive Design:**  
  - Works well on desktop, tablet, and mobile.

---

## Tech Stack

- **Frontend:**  
  - React (with functional components and hooks)
  - React Router v6
  - Tailwind CSS
  - Axios for API requests
  - Recharts for charts
  - [Heroicons](https://heroicons.com/) for icons

- **Backend:**  
  - Node.js with Express.js
  - MongoDB with Mongoose for object data modeling
  - JWT for authentication (coming soon)
  - `dotenv` for environment variables

---

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── ... (reusable components like Sidebar, Header, StatsCard)
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── ... (other pages)
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── ... (other config files)
```

### Backend
```
backend/
├── models/
│   ├── Colony.js
│   ├── Customer.js
│   └── Payment.js
├── routes/
│   ├── colonyRoutes.js
│   ├── customerRoutes.js
│   └── paymentRoutes.js
├── server.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB (local or a cloud-hosted instance like MongoDB Atlas)

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/cable-billing.git
   cd cable-billing
   ```

2. **Backend Setup:**
   - Navigate to the `backend` directory: `cd backend`
   - Install dependencies: `npm install`
   - Create a `.env` file in the `backend` directory with the following variables:
     ```
     MONGO_URI=<your_mongodb_connection_string>
     PORT=5000
     ```
   - Start the backend server: `npm start`

3. **Frontend Setup:**
   - Navigate to the `frontend` directory: `cd ../frontend`
   - Install dependencies: `npm install`
   - Start the frontend development server: `npm run dev`

The application should now be running, with the frontend at `http://localhost:5173` and the backend at `http://localhost:5000`.

---

## Usage

- Use the sidebar to navigate between Dashboard, Colonies, Customers, Payments, Reports, and Settings.
- Add or view colonies, customers, and payments.
- The dashboard provides a comprehensive overview of the business.
- Filter payments in the Reports page.

---

## Customization

- **API URL:**  
  The frontend expects the backend to be running on `http://localhost:5000`. If you change the port, update the `API` constant in the frontend components.

- **Styling:**  
  Modify Tailwind classes in the React components or extend the Tailwind config (`frontend/tailwind.config.js`) for custom themes.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
