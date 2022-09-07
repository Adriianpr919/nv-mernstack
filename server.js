const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const sizeRoutes = require('./routes/category1');
const goldRoutes = require('./routes/category2');
const stoneRoutes = require('./routes/category3');
const productRoutes = require('./routes/category4');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/category1', sizeRoutes);
app.use('/api/category2', goldRoutes);
app.use('/api/category3', stoneRoutes);
app.use('/api/category4', productRoutes);

// connect database
connectDB();

app.get('/', (_req, res) => {
    res.send('Dentro Del Servidor');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`El Puerto De Servidor: ${port}`));