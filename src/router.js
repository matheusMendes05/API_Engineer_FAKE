const router = require('express').Router();
const EngineerController = require('./controllers/EngineerController');
const ProfileController = require('./controllers/ProfileController');

// Engineer Routes
router.get('/api/users', EngineerController.index);
router.post('/api/create/user', EngineerController.create);
router.delete('/api/delete/user/:id', EngineerController.delete);
router.get('/api/user/:id', ProfileController.index);


module.exports = router;



