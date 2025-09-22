# Cable Billing Dashboard

A modern, responsive office dashboard for managing cable billing operations, including colonies, customers, and payments. Built with React, Tailwind CSS, and Axios, this project provides a clean UI and modular code structure for easy maintenance and scalability.

---

## Features

- **Dashboard Overview:**  
  View key stats (colonies, customers, total payments) and recent payment activity at a glance.

- **Colonies Management:**  
  Add, view, and manage colonies.

- **Customers Management:**  
  Add, view, and manage customers, linked to colonies.

- **Payments Management:**  
  Record and view payments, linked to customers.

- **Reports:**  
  Filter payments by month and year, and see totals.

- **Settings:**  
  Placeholder for company and admin settings.

- **Responsive Design:**  
  Works well on desktop, tablet, and mobile.

---

## Tech Stack

- **Frontend:**  
  - React (with functional components and hooks)
  - React Router v6
  - Tailwind CSS
  - Axios
  - [Heroicons](https://heroicons.com/) for icons

- **Backend:**  
  - Expects a REST API at `http://localhost:5000/api`  
    (with endpoints for `/colonies`, `/customers`, `/payments`)

---

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ColonyForm.jsx
│   │   ├── ColonyList.jsx
│   │   ├── CustomerForm.jsx
│   │   ├── CustomerList.jsx
│   │   ├── PaymentForm.jsx
│   │   ├── PaymentList.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   │   └── StatsCard.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Colonies.jsx
│   │   ├── Customers.jsx
│   │   ├── Payments.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/cable-billing.git
   cd cable-billing/frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Install Tailwind CSS (if not already):**
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   Add Tailwind to your `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Install Heroicons:**
   ```
   npm install @heroicons/react
   ```

5. **Start the development server:**
   ```
   npm start
   ```

6. **Backend API:**  
   Make sure your backend API is running at `http://localhost:5000/api`.

---

## Usage

- Use the sidebar to navigate between Dashboard, Colonies, Customers, Payments, Reports, and Settings.
- Add or view colonies, customers, and payments.
- Filter payments in the Reports page.
- Settings page is a placeholder for future enhancements.

---

## Customization

- **API URL:**  
  Change the `API` constant in each page/component if your backend runs on a different URL.

- **Styling:**  
  Modify Tailwind classes or extend the Tailwind config for custom themes.

- **Components:**  
  Add more features (edit/delete, search, pagination, etc.) by extending the modular components.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [Axios](https://axios-http.com/)
