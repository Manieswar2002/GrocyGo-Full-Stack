import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ✅ Check if EMAIL_USER & EMAIL_PASS exist
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ Missing EMAIL_USER or EMAIL_PASS in environment variables.");
}

// ✅ Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// ✅ Function to send emails
const sendEmail = async ({ sendTo, subject, html }) => {
    try {
        const mailOptions = {
            from: `"GrocyGo Support" <${process.env.EMAIL_USER}>`,
            to: sendTo,
            subject: subject,
            text: "This is an HTML email. If you see this, your email client does not support HTML.",
            html: html
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully:", info.response);
        return info;
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return null;
    }
};

export default sendEmail;
