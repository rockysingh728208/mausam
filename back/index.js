// import express from 'express'
// import dotenv from "dotenv"
// import cors from 'cors'
// import { connectDb } from './config/db.js';
// import connectCloudinary from './config/cloudinary.js';
// import adminrouter from './routes/adminRoute.js';
// import doctorRouter from './routes/doctorRoute.js';
// import userRouter from './routes/userRoute.js';

// dotenv.config();
// const app=express();
// app.use(cors());

// // api end points nmsdjbbjhb 

// app.use(express.json());
// app.use("/api/admin",adminrouter)
// app.use("/api/doctor",doctorRouter)
// app.use("/api/user",userRouter)
// app.get("/",(req,res)=>{
//     res.send("api works vidy kashyap")
// })

// connectDb();
// connectCloudinary();

// app.listen(process.env.PORT,()=>{
//     console.log(`server app running on ${process.env.PORT}`)
// })


import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { connectDb } from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import adminrouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();
const app = express();

// ✅ CORS setup: allow frontend + local dev
const allowedOrigins = [
  "http://localhost:5173",                  // Vite local frontend
  "https://bookingappointment.vercel.app"   // deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ API Routes
app.use("/api/admin", adminrouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// ✅ Root Test Route
app.get("/", (req, res) => {
  res.send("API is working - Vidya Kashyap 🚀");
});

// ✅ DB & Cloudinary Connect
connectDb();
connectCloudinary();

// ✅ Server Listen (local dev ke liye)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
