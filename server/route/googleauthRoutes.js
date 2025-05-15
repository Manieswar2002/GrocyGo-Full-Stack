import express from "express";
import passport from "passport";

const router = express.Router();

// 🔹 Google OAuth Login Route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// 🔹 Google OAuth Callback Route
router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/dashboard"); // Redirect to frontend dashboard
    }
);

// 🔹 Logout Route
router.get("/logout", (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).json({ message: "Error logging out" });
        }
        res.redirect("/");
    });
});

// 🔹 Check if User is Logged In
router.get("/current-user", (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

export default router;
