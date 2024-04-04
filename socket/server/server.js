import express from "express";
import cors from "cors";
import {createServer} from "http"
import {Server} from "socket.io";

const port = 8000;
const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        credentials:true,
    }
});
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Hello World")
}
)
io.on("connection",(socket)=>{
    console.log("User Connected",socket.id);


    socket.on("message",({room,message})=>{
        // console.log(data)
        socket.to(room).emit("recieve-message",message)
        
    })

    socket.on("join-room",(room)=>{
        socket.join(room)
    })


    socket.on("disconnect",()=>{
        console.log(`user disconnected with id no ${socket.id}`)
    })
})
server.listen(port,()=>{
    console.log(`Server is running successfully on port no ${port}`)
})