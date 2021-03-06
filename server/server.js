const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/voters', cors(), async (req, res) => {
    // const VOTERS = [
    //{ id: 1, firstname: 'Becca', lastname: 'Lee', email: 'becca@gmail.com', affiliation: 'republican'},
    // // ];
    // res.json(VOTERS);
    try{
        const { rows: voters } = await db.query('SELECT * FROM voters');
        res.send(voters);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/voters', cors(), async (req, res) => {
    const newPerson = { firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, affiliation: req.body.affiliation }
    //console.log("this is the post", [newPerson.firstname, newPerson.lastname, newPerson.email, newPerson.affiliation]);
    const result = await db.query(
        'INSERT INTO voters(lastname, firstname, email, affiliation) VALUES($1, $2, $3, $4) RETURNING *',
        [newPerson.lastname, newPerson.firstname, newPerson.email, newPerson.affiliation ]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});