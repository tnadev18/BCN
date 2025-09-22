const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://vedantbadre18:Veda%407827@cluster0.ejmchby.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(err));

// Start Server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));


const colonyRoutes = require("./backend/routes/colonyRoutes");
const customerRoutes = require("./backend/routes/customerRoutes");
const paymentRoutes = require("./backend/routes/paymentRoutes");

app.use("/api/colonies", colonyRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/payments", paymentRoutes);
