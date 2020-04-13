const router = require('express').Router();
// const Engineer = require('./database/connection');
const EngineerController = require('./controllers/EngineerController');

// Engineer Routes
router.get('/api/users', EngineerController.index);
router.post('/api/create/user', EngineerController.create);

module.exports = router;
