import express from 'express';

const app = express();

// app.get('/', (req, res) =>{
//     res.send("server is ready to serve");
// })

const PORT = process.env.PORT || 4000; // yaha pe agar environment variable me port defined hai to use karlo, nahi to 4000 use karlo
//production mein 100% hame environment variable use karna chahiye

app.listen(PORT , () =>{
    console.log(`Server is running at http://localhost:${PORT}`); // backtick use karna hai string interpolation ke liye
});

app.get("/api/jokes" , (req , res) =>{
    const jokes = [
        {id:1, joke:"Why don't scientists trust atoms? Because they make up everything!"},
        {id:2, joke:"Why did the scarecrow win an award? Because he was outstanding in his field!"},
        {id:3, joke:"Why don't skeletons fight each other? They don't have the guts."},
    ];
    res.send(jokes);
})

// string interpolation: `${variableName}` ye syntax hai jisme hum variable ko string ke andar directly use kar sakte hain without concatenation.

// example: const name = "Priyansh";
// console.log(`Hello, ${name}!`); // Output: Hello, Priyansh!

// hamare commonjs mein hame hamesha require wali statement use karni padti thi
// const express = require('express');
// ab ES6 mein hum import statement use kar sakte hain jo ki zyada modern aur readable hai
// import express from 'express'; leekin ye sirf tabhi kaam karega jab hum apne package.json file mein "type": "module" set karenge.
   