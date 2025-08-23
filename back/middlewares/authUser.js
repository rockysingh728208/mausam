
import jwt from "jsonwebtoken";
const authUser = async (req, res, next) => {
  try {
    // console.log("Token Received:", req.headers.authorization || req.headers.token);

    const token =
      req.headers.authorization?.split(" ")[1] || req.headers.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized login again" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.userId=decoded.id
    next();
  } catch (error) {
    console.error("authAdmin error:", error.message);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};
export default authUser
