const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const middleware = require("./middleware/errorMiddleware");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

connectDB();

const app = express();

app.get("/api", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(middleware.notFound);

app.use(middleware.errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
