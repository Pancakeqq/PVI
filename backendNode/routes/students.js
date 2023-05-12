const express = require('express')
const path = require('path')
const studentsController = require('../controllers/studentsController')
const router = express.Router()

router.get('/', studentsController.getStudents);

router.post('/', studentsController.postStundet);

router.delete('/', studentsController.postStundet);

module.exports = router;