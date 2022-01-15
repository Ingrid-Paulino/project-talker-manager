const router = require('express').Router({ mergeParams: true });

const validPassword = require('./validPassword');
const validEmail = require('./validEmail');
const req3 = require('../req3_login');

router.post('/', validEmail, validPassword, req3);