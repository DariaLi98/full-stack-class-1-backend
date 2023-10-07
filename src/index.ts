import express from 'express'

//import express library, generate an APP:
const app = express() 
//app is a variable, call express() function, and return to app

//Two parameters in .use(), one is string - '/', and a function()
//'/'' is a root domian URL, list on here if they reveive a request
//Function() will get two parameters(request, response)
app.get('/', function(req, res){
    console.log('We got request')
    // Receive the request, then, return "Hello world"
    res.send('Hello world')
})

//Run the app
app.listen(3000, ()=> {
    //call back
    console.log('The server is running at https://localhost:3000')
})


