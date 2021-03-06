// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
    console.log(
        "🛑 🌮 🐶 💪 💩\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou're on an older version of node that doesn't support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. 👌\n "
    );
    process.exit();
}

// Launch Mongo connection
require('dotenv').config({ path: 'variables.env' });
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, { useMongoClient: true }, (err) => {
    if (err) console.log(`WTF there was an error ${err.message}`);
    console.log("mongo is now connected to our systeme please request away :)");
});

// Import all models
require('./models/Magasin');
require('./models/user');




// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});