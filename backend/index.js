import express from "express"

const app = express();
const port = 8080;

let db = [];

// Route with parameters


app.get('/', (req, res) => {
  // Access parameters using req.params
    res.send(`Runnin home to you`)
})

app.get('/query/print', (req, res) => {
  res.json(db);
});

app.post('/query/create/:type/:string', (req, res) => {

  var today = new Date().toLocaleString('en-US');
  var today2 = new Date().toLocaleDateString('en-US');

    const n = {type: req.params.type, string: req.params.string, timeOfCreation: today}
  
  db.push(n);
  res.status(201).json(n);


    // res.send(`This is type ${req.params.type} and ${req.params.string} at ${today}`);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});