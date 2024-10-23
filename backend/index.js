const express = require('express');
const connectToDB = require('./utils')
const cors = require('cors')
const PORT = 3000;

const app = express();
app.use(cors);
app.use(express.json());


app.get('/expenses', async(req, res) => {
    const db = connectToDB();
    const sqlCall = 'SELECT * from expenses';
    
    db.connect( function(err) {
        if (err) throw err;
        db.query(sqlCall, async(err, result) => {
            if (err) throw err;
            res.json( {data : result} )
        })
    })
})

app.post('/expenses', async(req, res) => {
    const db = connectToDB();
    const {description, amount, category} = req.body;
    const sqlCall = `INSERT INTO expenses (description, amount, category) VALUES ('${description}', ${amount}, '${category}')`;

    db.connect( function (err) {
        if (err) throw err;

        db.query(sqlCall, async(req,res) => {
            if (err) throw err;

            console.log('1 record inserted');
            return res.json({message: 'expense successfully recorded'});
        })
    })
})

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on port ${PORT}`);
    } else {
        console.log(err);
    }
})




Id, dexcript, amt, category, time, date