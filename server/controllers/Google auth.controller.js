import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";

export async function googleAuthController(request, response) {
    if (!request.user) {
        return response.status(401).json({ message: "Authentication failed" });
    }

    // Generate JWT token for the authenticated user
    const token = jwt.sign({ userId: request.user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return response.status(200).json({
        message: "Google authentication successful",
        token,
        user: request.user
    });
}
