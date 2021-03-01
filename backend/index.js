const express=require("express");
const cors=require('cors');

const app=express();
app.use(cors())

const sample_dishes=[
    {image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",name: "Pizza",price:150},
    {image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",name: "Burger",price:120},
    {image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",name: "Fried Chicken",price:499},
    {image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",name: "Idly",price:8},
    {image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",name: "Parotta",price:12},
    {image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",name: "Chicken Briyani",price:150},
    {image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",name: "Mutton Briyani",price:350},
]

app.get("/",(req,res) => {
    console.log("Hello world");
})

app.post('/dishes',(req,res) => {
    res.send(sample_dishes);
})

app.listen(5000,() => {
    console.log("Listening to Port 5000");
})