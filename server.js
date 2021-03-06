const express = require('express');
const Animal_names = require('./server/models/data.js')
const app = express();
const cors = require('cors')
const path = require('path');

// connect to the database
require('./server/config/db')

// allow CORS
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For Deployment
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(express.static(path.join(__dirname, "search_field", "build")))

// simple server
const PORT = process.env.PORT || 8000;

// Simple Routes
app.get('/', async (req, res) => {
    res.send('/')
})
// find all to display to the FE
app.get("/findAll", async (req, res) => {
    let animals = await Animal_names.find()

    let data = []

    animals.forEach(animal => {
        data.push(animal)
    })

    res.json(data)
})

// find by parameter/query - dynamic partial search of mongodb collection
app.get('/search=:query', async (req, res) => {
    if (req.params.query === '') {
        res.send('please provide valid query')
    } else {
        try {
            let animalQuery = await Animal_names.aggregate([{
                $match: {
                    $or: [{
                        common_name: {
                            $regex: req.params.query,
                            '$options': 'i'
                        }
                    }, {
                        scientific_name: {
                            $regex: req.params.query,
                            '$options': 'i'
                        }
                    }]
                }
            }])

            res.json(animalQuery)
            // res.send(animalQuery)
        }
        catch (err) {
            console.log(err)
        }
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "search_field", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})