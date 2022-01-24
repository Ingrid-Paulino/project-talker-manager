const router = require('express').Router({ mergeParams: true });

const { validToken } = require('../createTalker/tokenTalke');
const { validName } = require('../createTalker/validName');
const { validAge } = require('../createTalker/validAge');
const { validTalk } = require('../createTalker/validTalk');
const { validDate } = require('../createTalker/validDate');
const { validRate } = require('../createTalker/validRate');
const editTalker = require('../req5_editTalker');

router.put('/', validToken, validName, validAge, validTalk, validRate, validDate, editTalker);

module.exports = router;