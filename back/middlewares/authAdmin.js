

import jwt from "jsonwebtoken";
const authAdmin = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1] || req.headers.atoken; // ✅ accept both

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized: No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: "Access denied: Admin only" });
    }

    next();
  } catch (error) {
    console.error("authAdmin error:", error.message);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};
export default authAdmin
