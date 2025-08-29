// console.log("Hello World!");
// console.log("Hello Local Repo!");
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Home Page")
})

app.post("/register", (req,res) => {
    res.sendStatus(201);
})

app.put("/user", (req,res) => {
    res.sendStatus(200);
})

app.patch("/user/about", (req,res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log('Server running on port ', port);
})