const router = require('express').Router();
const api = require('../ctrl/api');

router.get('/stories/before/:id', api.before);


module.exports = router;