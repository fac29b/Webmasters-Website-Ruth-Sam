const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
let sql;
const sqlite3 = require('sqlite3').verbose();
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3001;
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
});
const createTableSQL = `CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    email TEXT,
    message TEXT
  )`;
const insertSQL = `INSERT INTO users (name, phone, email, message) VALUES(?,?,? ,?)`;
const dropTableSQL = `DROP TABLE IF EXISTS users`;


db.run(dropTableSQL, (err) => {
    if (err) {
        console.error(`Error dropping table: ${err.message}`);
    } else {
        console.log('Users table dropped if it existed.');
        // Now create the new table
        db.run(createTableSQL, (err) => {
            if (err) {
                console.error(`Error creating table ${err.message}`);
            } else {
                console.log('Users table created with the new structure.');
            }
        });
    }
});


db.run(createTableSQL, (err) => {
    if (err) {
        console.error(`Error creating table: ${err.message}`);
    } else {
        console.log('Table working okay');
    }
});
app.post('/submit2', (req, res) => {
    const { name: user_name, phone: phone_number, email: email_address, message } = req.body;
    console.log(user_name, phone_number, email_address, message);
    res.send('Message recieved.');
    db.run(insertSQL, [user_name, phone_number, email_address, message], (err) => {
        if (err) {
            console.error(`Problem with data: ${err.message}`);
        } else {
            sql = "SELECT * FROM users";
            db.all(sql, [], (err, rows) => {
                if (err) return console.log(err.message);
                rows.forEach(row => {
                    console.log(row);
                });
            });

        }
    });

});




// app.get('/submit', (req, res) => {
//     res.send('Something is happening');
// });
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
    console.log(`App is listening on port ${port}.`)
});