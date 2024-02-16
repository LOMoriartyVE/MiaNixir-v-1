const { render } = require("ejs");
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 3000;
function ch(x){
    console.log(x)
}
app.use(express.static("Public"))
app.use(express.urlencoded({extended: true}))
const Matlab = require("./module/Matlab");
const PORE = require("./module/PORE");


mongoose.connect("mongodb+srv://muh2003erf:M8qB7KMVpLDZ6wLd@cluster1.izflkgj.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    ch("connected with DB")
    app.listen(port,()=>{ch("Started listening")})
},
()=>{ch("Connection failed with the Data Base")}).catch((err)=>{
    ch(err)
})

// mongoose.connect("mongodb+srv://AsterMuh2003kop:M8qB7KMVpLDZ6wLd@first-cluster.hforum0.mongodb.net/?retryWrites=true&w=majority"
// ).then(()=>{
//     ch("connected with DB")
//     app.listen(port,()=>{ch("Started listening")})
// },
// ()=>{ch("Connection failed with the Data Base")}).catch((err)=>{
//     ch(err)
// })

app.get("/create/",(req,res)=>{
    // res.send(DB)
    Matlab.find().then((result)=>{res.send(result)})
})

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/FOO.html",(req,res)=>{
    res.render("FOO.ejs")
})
app.get("/ho",(req,res)=>{
    res.render("ho.ejs")
})