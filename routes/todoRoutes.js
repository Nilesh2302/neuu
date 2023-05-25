let todoCtrl = require('../controllers/todoCtrl');
let express = require('express');

// Create a new router instance
let router = express.Router();

// Define routes
router.post('/add-Todo', todoCtrl.addTodo);

module.exports = router;
