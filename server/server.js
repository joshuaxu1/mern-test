const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

// Use bodyParser to parse JSON data
app.use(bodyParser.json());

// Define a POST route to handle incoming JSON data
app.post('/api', (req, res) => {
  
  const jsonData = req.body;
  // Log the JSON data sent in the request body
  console.log('Received JSON data:', req.body);

  // Respond with a success message (optional)
  res.status(200).json({ message: 'Data received successfully' });
});
// Add error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
