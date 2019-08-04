const express=require('express');
const app = express();
const verify=require('./verify-google');
const port = 5500

app.get('/token',async (req,res) => {
    let id_token=req.query.id_token;
    console.log("IN TOKEN",id_token);
    res.send(await verify(id_token));
})
app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))