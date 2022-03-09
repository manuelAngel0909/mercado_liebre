const express= require("express")
const app= express()
app.listen(5010, ()=>{
    console.log("corriendo en puerto 5010")
})
app.use(express.static("public"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
  });
  