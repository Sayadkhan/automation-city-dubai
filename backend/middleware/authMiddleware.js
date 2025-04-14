import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Verify Token Middleware
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "No token provided, access denied" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token is not valid" });
    }

    req.user = decoded;
    next();
  });
};

export const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ error: "You are not authorized to access this resource" });
  }

  next();
};
