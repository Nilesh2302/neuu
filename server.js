let express = require('express');
let mongoose = require('mongoose');
let todoRoutes = require('./routes/todoRoutes');

// for server creation
let app = express();

let mongoConnectionStr = "mongodb://localhost:27017/temp";

mongoose.connect(mongoConnectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use("/api", todoRoutes);

// server start with listen method
app.listen(3000, () => {
  console.info('server start on port 3000!');
});
