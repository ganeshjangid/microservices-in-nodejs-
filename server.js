const express=require('express');
const app=express();
const PORT=process.env.PORT || 8656;

const route=require('./api/routes');

route(app);


app.get("/",(req,res)=>{
   console.log("Hello World");
});

app.listen(PORT,()=>console.log(`Server is running on PORT no. ${PORT}`));