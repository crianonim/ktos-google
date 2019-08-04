const express=require('express');
const app = express()
const port = 5500

app.get('/token',(req,res) => {
    let id_token=req.query.id_token;
    console.log("IN TOKEN",id_token);
    res.send('{"a":12}');
})
app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))