const { execFileSync } = require('child_process');
const express= require('express');
const path= require('path');

const app=express();
const port= process.env.port || 8000;

const posts= require('./routes/posts');

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/posts',posts);

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/about',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','about.html'));

});

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}!`);

});