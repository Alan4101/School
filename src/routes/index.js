/*
* GET:      /api/subjects/subject/sbjId
* POST:     /api/subjects/
* PUT:      /api/subjects/updatebyid
* PUT:      /api/subjects/update
* DELETE:   /api/subjects/delete
* */
const express = require('express');
const router = express.Router();
const subject = require('../controllers/subject.controller');

router.get('/',(req, res, next)=>{
    res.send('respond resurse');
});

router.post('/', subject.create);
router.put('/updatebyid', subject.updateById);
router.delete('/delete', subject.delete);

module.exports = router;
