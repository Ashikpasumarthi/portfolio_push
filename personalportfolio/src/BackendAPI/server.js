let express = require('express');
let mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
  // Enable CORS for all routes

// let express = require('express');


const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  next();
});

const db = mysql.createPool({
    host: "localhost",  //'127.0.0.1'
    user: "root",
    password: "RA1811004010543",
    database: "personalPortfolio",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();   // rather than using callback hells , by giving promise we are diving into async await implementation.
//working on the git basics 
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Define a route to fetch data from the "Navbar" table

app.get('/api', async (req, res) => {
    const selectQuery = 'SELECT * FROM navbar';
    try {
        const [results] = await db.execute(selectQuery);  // Use execute instead of query
        console.log(results);  // Log the results to check the structure
        res.setHeader('Content-Type', 'text/plain');  // Set content type to plain text
        res.json(results);     // Send the results as JSON
    } catch (error) {
        console.log("SQL Error: " + error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/feedback', async (req, res) => {
  const selectQuery = 'SELECT * FROM feedback';
  try {
      const [results] = await db.execute(selectQuery);  // Use execute instead of query
      console.log(results);  // Log the results to check the structure
      res.setHeader('Content-Type', 'text/plain');  // Set content type to plain text
      res.json(results);     // Send the results as JSON
  } catch (error) {
      console.log("SQL Error: " + error.message);
      res.status(500).send('Internal Server Error');
  }
});

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.post('/feedback', async (req, res) => {
  console.log('Feedback route handler executed');
  const insertQuery = 'INSERT INTO feedback (FirstName, LastName, Feedback) VALUES (?, ?, ?)';
  const values = [req.body.FirstName, req.body.LastName, req.body.Feedback];

  try {
    await db.execute(insertQuery, values);
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Catch-all route to serve React's index.html for all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

  //start the server
  app.listen(3001, () => {
    console.log('Server Started');
  });




  // https://dev.to/adrvnc/troubleshooting-something-is-already-running-on-port-3000-error-in-reactjs-simple-solution-57a8  // helpful link related to port 





//Another way of writing code to data from database table using try catch async await . 

// app.get('/', async (req, res) => {
//     try {
//       const selectQuery = 'Select * from Navbar';
//       const results = await db.query(selectQuery);
//       res.json(results);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
//   app.listen(3000, () => {
//     console.log('Server Started');
//   });
// const result = await db.query("Select * from Navbar");
// console.log(result);