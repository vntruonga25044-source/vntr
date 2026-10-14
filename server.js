const express = require('express');
const connectDB = require('./config/database.config'); 
const userRoutes = require('./routes/user.routes'); 
const path = require('path');

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});