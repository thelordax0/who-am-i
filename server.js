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


//if 5000 port already in use you can chance yourself
app.listen(5000)