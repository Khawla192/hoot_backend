require('dotenv').config();
require('./config/database');

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

// Import the controller file
const testJwtRouter = require('./controllers/test-jwt');
const authRouter = require('./controllers/auth');
const usersRouter = require('./controllers/users');
const hootsRouter = require('./controllers/hoots');

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// ROUTES
app.use('/auth', authRouter);
app.use('/test-jwt', testJwtRouter);
app.use('/users', usersRouter);
app.use('/hoots', hootsRouter);

// LISTENER
app.listen(3000, () => {
  console.log('The express app is ready!');
});
