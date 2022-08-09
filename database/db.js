const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect( 
            'mongodb+srv://nv-user:testing123@nv-mernstack.rg2rjz9.mongodb.net/?retryWrites=true&w=majority', 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log('DataBase Conactedo a Mongo DB.');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;