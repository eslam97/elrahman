const mongoose = require('mongoose');

//mongodb connection
const  connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://eslam:5K8verudKTczLfEW@elrahman.g4x5x.mongodb.net/elrahman?retryWrites=true&w=majority',
            { useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
            })
        console.log('MongoDB Connected....');
    }
    catch (err){
        console.log(err.message)
        process.exit(1)
    }
}
module.exports = connectDB
