// Importing required modules
const express = require('express');
const Email = require('./models/Email');

// Creating an Express application
const app = express();

const port = 3000;

app.use(express.json());

// Defining a route
app.get('/', (req, res) => {
  res.json({'Hello': 'Express!'});
});

// Create an email
app.post('/subscribers', async (req, res) => {
  try {
    const { email } = req.body;
    const newEmail = await Email.create({ email });
    res.status(201).json(newEmail);
  } catch (error) {
    console.error('Error creating email:', error);
    res.status(500).json({ error: 'Unable to create email' });
  }
});

// Read all emails
app.get('/subscribers', async (req, res) => {
  try {
    const emails = await Email.findAll();
    res.json(emails);
  } catch (error) {
    console.error('Error retrieving emails:', error);
    res.status(500).json({ error: 'Unable to retrieve emails' });
  }
});

// Read a specific email
app.get('/subscribers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const email = await Email.findByPk(id);
    if (email) {
      res.json(email);
    } else {
      res.status(404).json({ error: 'Email not found' });
    }
  } catch (error) {
    console.error('Error retrieving email:', error);
    res.status(500).json({ error: 'Unable to retrieve email' });
  }
});

// Update an email
app.put('/subscribers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const emailToUpdate = await Email.findByPk(id);
    if (emailToUpdate) {
      emailToUpdate.email = email;
      await emailToUpdate.save();
      res.json(emailToUpdate);
    } else {
      res.status(404).json({ error: 'Email not found' });
    }
  } catch (error) {
    console.error('Error updating email:', error);
    res.status(500).json({ error: 'Unable to update email' });
  }
});

// Delete an email
app.delete('/subscribers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const emailToDelete = await Email.findByPk(id);
    if (emailToDelete) {
      await emailToDelete.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Email not found' });
    }
  } catch (error) {
    console.error('Error deleting email:', error);
    res.status(500).json({ error: 'Unable to delete email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
