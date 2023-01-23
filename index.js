// import express
const express = require('express');
//init express
const app = express();
const UserRouter = require('./Routes/UserRoute')

//parse data
app.use(express.json())

/* const AuthMiddleWare = async(req,res,next)=>{
    let auth = false
    if(auth){
        next()
    }
    else {
      res.send('You are not authorized !! ');
    }
}

app.use(AuthMiddleWare)



 
//create and endPoint- routerHandler
app.get('/', (req,res)=>{
    //res.send('This is a Home PAge')
    res.sendFile(__dirname + '/views/Home.html')
})


app.get('/Profile', (req,res)=>{
    res.sendFile(__dirname + '/views/Profile.html')
})

app.get('/Css/Home.css', (req,res)=>{
    res.sendFile(__dirname + '/views/Css/Home.css')
}) 




app.use(express.static(__dirname + '/views')) */

//method: get
//get all userLists data

app.use('/api/users',UserRouter )


const PORT = 5000;
app.listen(PORT, err=> err? console.log(err) : console.log(`server is running on port ${PORT}`))