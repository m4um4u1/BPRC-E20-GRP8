const router = require('express').Router();
const api = require('./api');

router.use('/api/data', api);

module.exports = router;
