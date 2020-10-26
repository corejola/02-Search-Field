const express = require('express');
const Animal_names = require('./server/models/data.js')
const app = express();
const cors = require('cors')

// connect to the database
require('./server/config/db')

// allow CORS
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, './search-field/build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './search-field/build/index.html'));
});


// simple server
const PORT = process.env.PORT || 8000;

// Simple Routes
// find all to display to the FE
app.get("/findAll", async (req, res) => {
    let animals = await Animal_names.find().lean()

    let data = []

    animals.forEach(animal => {
        data.push(animal)
    })
    res.send(data)
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

            res.send(animalQuery)
        }
        catch (err) {
            console.log(err)
        }
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})