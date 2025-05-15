import sendEmail from './sendEmail'

sendEmail({
    sendTo: "saimani9381787332@gmail.com", // Replace with your own email
    subject: "Test Email from Resend",
    html: "<h1>Hello from LolMart!</h1><p>This is a test email using Resend API.</p>",
});
