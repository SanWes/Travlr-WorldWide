require('dotenv').config();
const mongoose = require('mongoose');

const db_name = process.env.MONGODB_DB_NAME;
const user = process.env.MONGODB_USER;
const pw = process.env.MONGODB_PW;
const cluster = process.env.MONGODB_CLUSTER;

const mongoURI = `mongodb+srv://${user}:${pw}@${cluster}/${db_name}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the database`))
    
    .catch(err => console.log(`Something went wrong when connecting to the database `, err));

module.exports = mongoose;