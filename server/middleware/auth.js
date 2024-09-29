const jwt = require("jsonwebtoken");
exports.auth = (req, res, next) => {
  try {
    const token = req.header("X-Auth-Token");
    if (!token) {
      res.status(401).json({
        massage: "No token available,authorized denied",
      });
    }
    const verifyToken = jwt.verify(token, "sun", (err, decode) => {
      if (err) {
        res.status(401).json({
          massage: "token not valid",
        });
      } else {
        console.log(decode);
    req.user =decode
        next();
      }
    });
  } catch (error) {
    console.log("something went wrong in middleware:" + error);
    res.status(500).json({
      massage: "server error",
    });
  }
};
