const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const category1Routes = require('./routes/category1');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category1', category1Routes);

// connect database
connectDB();

app.get('/', (_req, res) => {
    res.send('Dentro Del Servidor');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`El Puerto De Servidor: ${port}`));