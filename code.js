//const {io}=require('socket.io')
const n=prompt("Enter your name")
    // const {io}=require('socket.io-client/dist/socket.io.js')
    const socket=io("https://miniasterpiece.herokuapp.com/")
    socket.on("connection")
    const name=prompt("Enter your name")
    socket.emit("user-joined",name)
    socket.on("user-joined",(name)=>{
        display(`${name} joined`,"float-left")
        // const sc=document.getElementById("x")
        // sc.scrollTop=sc.scrollHeight
    })

    socket.on("send-msg",(msg)=>{
        display(msg,"float-left")
        // const sc=document.getElementById("x")
        // sc.scrollTop=sc.scrollHeight
    })

    socket.on("user-left",name=>{
        display(`${name} left`,"float-left")
        // const sc=document.getElementById("x")
        // sc.scrollTop=sc.scrollHeight
    })
    
    const display=(message,position_class)=>{
        const container=document.querySelector(".container")
        const newElement=document.createElement("div")
        newElement.classList.add(position_class,"bg-gray-200","rounded","clear-both","p-1","m-1")
        newElement.innerText=message
        container.append(newElement)
        const sc=document.getElementById("x")
        sc.scrollTop=sc.scrollHeight
        }

    const SendMsg=()=>{
        const msg=document.querySelector(".message")
        const msgInput=msg.value
        display(msgInput,"float-right")
        socket.emit("send-msg",msgInput)
        msg.value=""
    }    