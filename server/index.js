const express = require("express")
const app = express()
const connectDB = require("./config/db")

//connect database
connectDB();

// Init Middleware
app.use(express.json({extended:false}));

//Routes
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'))
app.use('/api/courses',require("./routes/courses"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));