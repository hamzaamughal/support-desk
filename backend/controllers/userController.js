const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
  const { name, emaii, password } = req.body;

  if (!name || !emaii || !password) {
    return res.status(400).json({
      message: 'Please provide all the required fields',
    });
  }

  res.send('registerUser');
});

const loginUser = asyncHandler(async (req, res) => {
  res.send('loginUser');
});

module.exports = {
  registerUser,
  loginUser,
};
