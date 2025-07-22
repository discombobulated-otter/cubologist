
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => res.send('API running'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server started on port 5000')))
  .catch(err => console.error(err));