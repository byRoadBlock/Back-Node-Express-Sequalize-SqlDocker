const express = require('express');
const router = express.Router();
const areaController = require('../controllers/area-controller');

router.get('/:id', areaController.getAll);
router.post('/', areaController.findId);

module.exports = router;