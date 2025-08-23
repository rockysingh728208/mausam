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

// import express from 'express';
// import dotenv from "dotenv";
// import cors from 'cors';
// import { connectDb } from './config/db.js';
// import connectCloudinary from './config/cloudinary.js';
// import adminrouter from './routes/adminRoute.js';
// import doctorRouter from './routes/doctorRoute.js';
// import userRouter from './routes/userRoute.js';

// dotenv.config();
// const app = express();

// // ✅ CORS setup
// const allowedOrigins = [
//   "http://localhost:5173",   // development (vite frontend local)
//   "https://your-frontend.vercel.app"  // deployment (frontend vercel url)
// ];

// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true
// }));

// // Middleware
// app.use(express.json());

// // Routes
// app.use("/api/admin", adminrouter);
// app.use("/api/doctor", doctorRouter);
// app.use("/api/user", userRouter);

// app.get("/", (req, res) => {
//   res.send("api works vidy kashyap");
// });

// connectDb();
// connectCloudinary();

// app.listen(process.env.PORT, () => {
//   console.log(`server app running on ${process.env.PORT}`);
// });
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

// ✅ CORS setup
const allowedOrigins = [
  "http://localhost:5173",   // development (vite frontend local)
  "https://mausam-frontend-swart.vercel.app"  // deployment (frontend vercel url)
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS not allowed for this origin"), false);
    }
  },
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/admin", adminrouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working ✅ Vidya Kashyap");
});

// DB + Cloudinary connect
connectDb();
connectCloudinary();

// Server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
