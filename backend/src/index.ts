import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from './routes/users';
import authRoutes from "./routes/auth";

mongoose.connect(process.env.MONGGODB_CONN_STRING as string)

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true, type: "application/json"}));
app.use(cors())

// Define routes and middleware here
app.use("/api/users", authRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
