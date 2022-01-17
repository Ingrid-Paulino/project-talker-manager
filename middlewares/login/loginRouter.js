const router = require('express').Router({ mergeParams: true });

const { password1 } = require('./validPassword');
const { email1, email2 } = require('./validEmail');
const { req3 } = require('../req3_login');

router.post('/', email1, email2, password1, req3);

module.exports = router;