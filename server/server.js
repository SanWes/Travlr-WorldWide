require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookies = require("cookie-parser");
const port = 8000;
const app = express();


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.use(cors(
    {credentials: true, origin: 'http://localhost:3000'}
));

app.use(express.json());//tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information

app.use(cookies());

//require our mongoose config file and tell it about the db name
require("./config/mongoose.config");

//require our route and tell it about our app
require("./routes/user.routes")(app);
require("./routes/post.routes")(app);
require("./routes/cost-of-living.routes")(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );