const express = require('express'); 
const bodyParser = require('body-parser');
const ownerRouter = require('./routes/owners.router');
const petRouter = require('./routes/pets.router');

const PORT = 5000 || process.env.PORT ;

const app = express();

app.use(express.static('server/public'));

app.use(bodyParser.json());

app.use('/pets', petRouter);
app.use('/owners', ownerRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});