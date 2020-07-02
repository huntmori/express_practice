import express from "express"
import Server from "./src/server"

const server = new Server();
const app:express.Application = server.getInstance();

app.listen(8001, ()=>{
    console.log("open serve 'http://localhost:8001'");
})