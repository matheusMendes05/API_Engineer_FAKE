const router = require('express').Router();
const EngineerController = require('./controllers/EngineerController');

// Engineer Routes
router.get('/api/users', EngineerController.index);
router.post('/api/create/user', EngineerController.create);

module.exports = router;



