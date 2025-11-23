import express from "express"
import { createServer } from "node:http"
import {Server} from "socket.io"
import cors from "cors"
import connectToSocket from "./controllers/socketManager.js"
const app=express()
app.use(cors())
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extended:true}))
import mongoose from "mongoose"
import userroutes from "./routes/users.routes.js"

const server=createServer(app)
const io=connectToSocket(server)
app.set("port",(process.env.PORT||8000))
app.use("/api/v1/users", userroutes)

const start=(async ()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://arpitjha7878_db_user:zNL9dfmIEs3mwgdC@cluster0.2l9zjzk.mongodb.net/?appName=Cluster0")
    console.log("Db host connected")
    server.listen(app.get("port"),()=>{
        console.log("Listening")
    })
})
start()