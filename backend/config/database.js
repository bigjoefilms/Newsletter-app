const { Sequelize } = require('sequelize');

// Define the database connection configuration
const sequelize = new Sequelize('gahwhyyr', 'gahwhyyr', 'oCTu8XH93c0uDZAj8a6UEgYkD7i2vUba', {
  host: 'arjuna.db.elephantsql.com',
  dialect: 'postgres'
});


// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Create the table if does not exist
sequelize.sync({ force: false }) // Use `{ force: true }` to drop and recreate the table on every application start
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });


module.exports = sequelize;
