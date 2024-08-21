const { query, validationResult } = require('express-validator');

const pagination = [
  query('pageSize')
    .optional({ values: 'falsy' })
    .isInt({ min: 1 })
    .withMessage('Invalid per page value'),
  query('page')
    .optional({ values: 'falsy' })
    .isInt({ min: 1 })
    .withMessage('Invalid page value'),
];

const reporter = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: 'Invalid input', errors: errors.array() });
  }

  next();
};

module.exports = { pagination, reporter };
