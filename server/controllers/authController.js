const { hashPassword, comparePassword } = require("../hash/authenticate");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("this test is working"); //doesn't authenticate but just checks if the test is working
};

// Register Users endpoint (creates a required and a response)
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name was entered
    if (!name) {
      return res.json({
        error: "name is required for signup",
      });
    }

    if (!email) {
      return res.json({
        error: "email is required",
      });
    }

    //check if password was entered in the right way
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and must be at least 6 characters",
      });
    }

    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

    const hashedPassword = await hashPassword(password);

    //create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//Login User endpoint

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "This user does not exist",
      });
    }
    // check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      // res.json("Passwords match");
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_KEY,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Passwords do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
