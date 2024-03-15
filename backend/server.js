const express = require('express');
const mysql = require ('mysql' )
const cors = require ('cors')

const app = express();
app.use (cors())
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sanjan1234',
    database: 'booksage5',
});

app.get('/', (req, res) => {
    return res.json("from backend");
})

app.get('/sponsor', (req, res) => {
    const sql=`SELECT * FROM sponsor`  ;
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.post ('/applicants', (req, res) => {
    const address = req.body.address;
    const name = req.body.name;
    const aadhar = req.body.Aadhar_number;
    const rd = req.body.RD_number;
    const income = req.body.income;
    const bookname = req.body.bookname;
    const bookcost = req.body.bookcost;
    const sql = `INSERT INTO Applicants (address , name, Aadhar_number, RD_number, income , bookname, bookcost) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [ address, name, aadhar,rd, income , bookname , bookcost], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.post ('/donate', (req, res) => {
    
    const donation = req.body.donation;
    const email = req.body.email;
    
    const sql = `INSERT INTO Sponsor (donation , email) VALUES (?,?)`;
    db.query(sql, [  donation  , email], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});



app.get('/status', (req, res) => {
    const sql=`SELECT * FROM Beneficiary_Book_Status_View`  ;
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.listen(8081, () => {    
    console.log('Server is running on port 8081');
}   );