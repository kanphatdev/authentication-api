const prisma = require("../prisma/prisma");
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    res.send("register controller");
  } catch (error) {
    res.send("error: " + error).status(500);
  }
};

exports.login = async (req, res) => {
  res.send("login controller");
};
