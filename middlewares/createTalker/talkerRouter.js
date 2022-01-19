const router = require('express').Router({ mergeParams: true });

const { validToken } = require('./tokenTalke');
const { validName } = require('./validName');
const { validAge } = require('./validAge');
const { validTalk } = require('./validTalk');
const { validDate } = require('./validDate');
const { validRate } = require('./validRate');
const createTalker = require('../req4_createTalker');

router.post('/', validToken, validName, validAge, validTalk, validRate, validDate, createTalker);

module.exports = router;