const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.register = async (data) => {
  data.password = await bcrypt.hash(data.password, 10);
  await User.create(data);
};

exports.login = async (email, password) => {
  const user = await User.findByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  return jwt.sign({ id: user.id }, process.env.JWT_SECRET);
};
