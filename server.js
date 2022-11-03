const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const sizedRoutes = require('./routes/sized');
const goldenRoutes = require('./routes/golden');
const rockRoutes = require('./routes/rock');
const productRoutes = require('./routes/product');
const filterRoutes = require('./routes/filter');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/sized', sizedRoutes);
app.use('/api/golden', goldenRoutes);
app.use('/api/rock', rockRoutes);
app.use('/api/product', productRoutes);
app.use('/uploads', express.static('uploads'));
//app.use('/uploadsSized', express.static('uploadsSized'));
//app.use('/uploadsGolden', express.static('uploadsGolden'));
//app.use('/uploadsRock', express.static('uploadsRock'));
app.use('/api/filter', filterRoutes);

// connect database
connectDB();

app.get('/', (_req, res) => {
    res.send('Dentro Del Servidor');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`El Puerto De Servidor: ${port}`));