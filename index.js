const express = require('express');
const app = express();
const mongoose = require('mongoose');
var {books} = require("./models/book");
let bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const userDB = mongoose.createConnection('mongodb://interntest:easyas123@interncluster-shard-00-00-zmzoh.mongodb.net:27017,interncluster-shard-00-01-zmzoh.mongodb.net:27017,interncluster-shard-00-02-zmzoh.mongodb.net:27017/test?ssl=true&replicaSet=InternCluster-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser : true});
userDB.once('open', function(){console.log('Connected to MongoDB Atlas.');});
userDB.on('error', function(err){console.log('Database ERROR: ' + err);});
app.post('/delete-user',function(req,res){
  books.deleteOne({name:req.body.name},(err, data) => {
    if(err){
      console.log(err);
    }
    console.log(null, data);
    });
    res.send("Deleted")
})
app.post('/create-user',function(req,res){
  let newUser = new books(req.body);
newUser.save()
    .then(newUser => {
        // res.status(200).json({'data': 'data added successfully'});
        console.log("YES")
        res.json(newUser);
    })
    .catch(err => {
        res.status(400).send('adding new data failed');
    });
res.json(newUser)
})
app.listen(3000,function(){
  console.log("Server is listening at port 3000");
})
