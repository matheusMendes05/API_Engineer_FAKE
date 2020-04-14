const router = require('express').Router();
const EngineerController = require('./controllers/EngineerController');
const ProfileController = require('./controllers/ProfileController');

// Engineer Routes

// EngineerController
router.get('/api/users', EngineerController.index);
router.post('/api/create/user', EngineerController.create);
router.delete('/api/delete/user/:id', EngineerController.delete);
router.put('/api/update/user/:id', EngineerController.update);

// ProfileController
router.get('/api/user', ProfileController.index);

module.exports = router;



