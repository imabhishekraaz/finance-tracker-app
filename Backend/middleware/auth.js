import user from "../models/user.model.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Use a secure secret key in production
const TOKEN_EXPIRATION = "1h"; // Token expiration time

export default async function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
            success: false, 
            message: 'Authorization header missing or malformed' 
        });
    };
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const foundUser = await user.findById(decoded.id).select("-password");
        if (!foundUser) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            });
        }

        req.user = foundUser; 

        next(); 

    } catch (err) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid or expired token' 
        });
    }
}