import * as functions from 'firebase-functions';
import { createTransport } from "nodemailer";

const successMessage: string = "Your request for registration has been successfully sent!\nYou can expect an email from us soon with your username and password";
const errorMessage: string = "Oops! These was a problem sending your email...\nThis is most likely an error in our server.\nPlease try again later or email us at admin@dili.k";

interface NewUserDetails {
    name: string,
    institution: string,
    email: string
};

async function newUserAlert(details: NewUserDetails) {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "naveedpash@gmail.com",
            pass: "yaAllah@786"
        }
    });

    await transporter.sendMail({
        from: details.email,
        to: '"Admin" <admin@dili.pk>',
        subject: "New User Alert",
        text: "You have a new sign up request by: " + details.name + " from " + details.institution + "."
    })
    .catch(() => { return errorMessage });
}

export const sendNewUserAlert = functions.https.onCall((data: NewUserDetails, context?) => {
    newUserAlert(data)
    .then(() => { return successMessage })
    .catch(() => { return errorMessage});
});
