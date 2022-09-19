const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateRegisterInput is a combination Express middleware that uses the check
// middleware to validate the keys in the body of the request to register a user
const validateRegisterInput = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Email is invalid'),
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 30 })
    .withMessage('First name must be between 2 and 30 characters'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 30 })
    .withMessage('Last name must be between 2 and 30 characters'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6, max: 30 })
    .withMessage('Password must be between 6 and 30 characters'),
  check('birthDay')
    .exists({ checkFalsy: true })
    .isDate()
    .withMessage('Birthday must be a valid date'),
  handleValidationErrors
];

module.exports = validateRegisterInput;