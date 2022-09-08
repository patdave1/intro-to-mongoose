const express = require('express');
const { dbConnect } = require("./confiq/dbConnect")
const userRouter = require("./routes/users.route")

const app = express();


app.get("/" ,(req,res) =>{
    res
    .status(200)
    .send("welcome to my server .please use / users to get all users")
})


app.use('/users', userRouter);

async function start() {
    await dbConnect();
}

app.listen(4000 ,(err)=>{
    console.log(" Server listening on http://localhost:4000");
});

start();