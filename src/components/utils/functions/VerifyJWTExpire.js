import jwt from "jsonwebtoken";

export default function VerifyJWTExpire(token) {
  try {
    const decoded = jwt.decode(token);
    if (decoded.exp < Date.now() / 1000) {
      // Token has expired
      return true;
    }
    return false;
  } catch (err) {
    // Invalid token
    return true;
  }
}
