const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        
        let db = mongoose.connection;
        
        db.on('error', (error) => reject(error));
        
        db.once('open', function() {
            resolve();
            console.log('Connected to MongoDB');
        });
    });
}


module.exports = {
    connect
}
