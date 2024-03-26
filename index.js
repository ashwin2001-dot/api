const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

// Endpoint to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Endpoint to get a user by ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
