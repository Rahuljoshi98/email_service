import { Resend } from "resend";
import dotenv from "dotenv";
import { adminEmailTemplate } from "./adminEmailTemplate.js";
import { invitationEmail } from "./invitationEmail.js";
import { howToUse } from "./howToUse.js";

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;

const resend = new Resend(resendApiKey);

export const sendCompanyCreationEmail = async (adminEmail) => {
  try {
    const inviteParams = {
      signUpLink: "https://fdev.soleapp.com.au/",
      unsubscribeLink: "https://fdev.soleapp.com.au/",
      twitterLink: "https://x.com/home",
      linkedinLink: "https://www.linkedin.com/",
      facebookLink: "https://www.facebook.com/",
      helpcenterLink: "https://fdev.soleapp.com.au/",
      privacyLink: "https://fdev.soleapp.com.au/",
      termsLink: "https://fdev.soleapp.com.au/",
    };

    const howToUseParams = {
      userName: "Rahul Joshi",
      founderName: "Johann Oberholzer",
      twitterLink: "https://x.com/home",
      linkedinLink: "https://www.linkedin.com/",
      facebookLink: "https://www.facebook.com/",
      helpcenterLink: "https://fdev.soleapp.com.au/",
      privacyLink: "https://fdev.soleapp.com.au/",
      termsLink: "https://fdev.soleapp.com.au/",
      appStoreLink: "https://www.apple.com/in/app-store/",
      playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
    };
    await resend.emails.send({
      from: "PaidEarly <support@paidearly.in>",
      to: adminEmail,
      subject: "Welcome to Sole",
      html: invitationEmail(inviteParams),
    });
    await resend.emails.send({
      from: "PaidEarly <support@paidearly.in>",
      to: adminEmail,
      subject: "Welcome to Sole",
      html: howToUse(howToUseParams),
    });
    console.log(`Email sent successfully to ${adminEmail}`);
  } catch (error) {
    console.error(`Error sending email to ${adminEmail}:`, error);
  }
};

sendCompanyCreationEmail("2000rahuljoshi@gmail.com");
