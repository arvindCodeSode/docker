const epxress = require("express");
const app = epxress();
const PORT = 4500;

app.get('/',( req,res) =>{
    res.send(JSON.stringify([
        {name:"Arvind"},
        {name:"Sonu"}
    ]))
});
app.listen(PORT,()=>{
    console.log("This port is running on "+PORT);
});