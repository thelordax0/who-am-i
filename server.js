import express from "express"
const app=express()
app.set("View-Engine","ejs")

app.use((req,res)=>{
    const socket = req.socket;
    res.render("home.ejs",{
        ip:socket.remoteAddress,
        port:socket.remotePort
    })
})



app.listen(5000)