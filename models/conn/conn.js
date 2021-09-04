const mongoose = require('mongoose');

function Conn(url,porta,banco){
    mongoose.connect(`mongodb+srv://dbAdmin:Isk45IOSFvuTWfIX@nodedb.6h7mj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { 
        console.log("MongoDB connected");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Conn;