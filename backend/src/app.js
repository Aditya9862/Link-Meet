import express from "express";
import { createServer } from "node:http";//connect server and express
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { initializeSocket } from "./controllers/socketManager.js"
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
initializeSocket(server);
// const io = (server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
        const conectionDb = await mongoose.connect("mongodb+srv://adityabajpai1008_db_user:sOzi8Tn664Gsdym3@cluster0.c3o1vxk.mongodb.net/?appName=Cluster0")
    
    console.log("Mongo connected");
    server.listen(app.get("port"), () =>{
        console.log("LISTENING ON PORT 8000")
    });
}

start();