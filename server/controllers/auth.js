const prisma = require("../prisma/prisma");
const bcrypt = require("bcrypt");

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
      data:userData,
      select:{
        id:true,
        email:true
      }
    });

    res.json({
       massage:"register success"
    })
  } catch (error) {
    res.send("error: " + error).status(500);
  }
};

exports.login = async (req, res) => {
  res.send("login controller");
};
