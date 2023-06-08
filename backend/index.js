const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse request body
app.use(bodyParser.json());

// Dummy data array to simulate database storage
let subscribers = [];

// Endpoint to handle new subscriber registration
app.post('/send-email', (req, res) => {
  const { email } = req.body;

  // Create a new subscriber object
  const newSubscriber = {
    id: subscribers.length + 1,
    email
  };

  // Store the new subscriber
  subscribers.push(newSubscriber);

  res.status(201).json(newSubscriber);
});

// Endpoint to get all subscribers
app.get('/subscribers', (req, res) => {
  res.status(200).json(subscribers);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});