const prisma = require("../prisma/prisma");

exports.list = async (req, res) => {
  try {
    const user = await prisma.user.findMany({})
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({ massage: "server error" }).status(500);
  }
};
exports.update = async (req, res) => {
  try {
    const { userId } = req.params;
    const { email } = req.body;
    const updated = await prisma.user.update({
      where: {
        id:Number(userId)
      },
      data: {
        email: email
      }
    })
    res.json(updated);
  } catch (error) {
    console.log(error);
    res.json({ massage: "server error" }).status(500);
  }
};
exports.remove = async (req, res) => {
  try {
    const { userId } = req.params;
    const remove = await prisma.user.delete({
        where: {
            id:Number(userId)
        }
    });
    res.status(200).json({ massage:"deleted success"});
  } catch (error) {
    console.log(error);
    res.json({ massage: "server error" }).status(500);
  }
};
