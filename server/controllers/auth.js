const prisma = require("../prisma/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check empty email
    if (!email) {
      return res.status(400).json({
        success: false,
        massage: "Invalid email address",
      });
    }
    // check password empty
    if (!password) {
      return res.status(400).json({
        success: false,
        massage: "Invalid password",
      });
    }
    const checkUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (checkUser) {
      return res.status(409).json({
        massage: "Email already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPasword = await bcrypt.hash(password, salt);
    const userData = {
      email: email,
      password: hashPasword,
    };
    const newUser = await prisma.user.create({
      data: userData,
      select: {
        id: true,
        email: true,
      },
    });

    res.json({
      massage: "register success",
    });
  } catch (error) {
    res.send("error: " + error).status(500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    // check email in DB
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(400).json({ message: " Invalid credentail" });
    }
    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: " password is not match" });
    }
    // create payload
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
    // create token
const token = jwt.sign(payload,"sun",{
  expiresIn:"1d"
})
    res.json({
      user:payload.user,
      token:token
    });
  } catch (error) {
    console.log(error);
    res.json({ massage: "server error" }).status(500);
  }
};
