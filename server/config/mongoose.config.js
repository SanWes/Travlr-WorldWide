require('dotenv').config();
const mongoose = require('mongoose');

const db_name = process.env.MONGODB_DB_NAME

const user = process.env.MONGODB_USER
const pw = process.env.MONGODB_PW


mongoose.connect(`mongodb+srv://${user}:${pw}@mern.6etyz.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${db_name} database`))
    
    .catch(err => console.log(`Something went wrong when connecting to the database: ${db_name} `, err));