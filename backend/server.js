const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const colonyRoutes = require("./routes/colonyRoutes");
const customerRoutes = require("./routes/customerRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/colonies", colonyRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/payments", paymentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));
