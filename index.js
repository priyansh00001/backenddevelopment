require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT ; // Use a default value

app.get('/' , (req , res) => {
    res.send('Welcome to the Webpage');
});

app.get('/instagram' , (req , res) =>{
    res.send('user_name : Priyansh_____25')
});  

app.listen(PORT, () => { // Correct callback
    console.log(`App is listening on the port ${PORT}`)
})