import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./utils/db.js";

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions={
    origin:'http//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const port= process.env.port || 3000;
app.listen(port,()=>{
    connectDB();
    console.log(`Server running at port ${port}`);
})
// app.get("/",(req,res)=>{
//     return res.status(200).json({
//         message:"i am coming from backend",
//         success:true
//     })
// })

//api's
import userRoute from "./routes/user.route.js";
app.use("/api/v1/user",userRoute);
import companyRoute from "./routes/company.route.js";
app.use("/api/v1/company",companyRoute);
import jobRoute from "./routes/job.route.js";
app.use("/api/v1/job",jobRoute);
import applicationRoute from "./routes/application.route.js";
app.use("/api/v1/application",applicationRoute);