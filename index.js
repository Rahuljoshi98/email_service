import { Resend } from "resend";
import dotenv from "dotenv";
import { invitationEmail } from "./EmailTemplates/invitationEmail.js";
import { howToUse } from "./EmailTemplates/howToUse.js";
import { trialOver } from "./EmailTemplates/trialOver.js";
import { support } from "./EmailTemplates/support.js";

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
      knowledgeBaseLink: "https://fdev.soleapp.com.au/",
    };

    const trialOverParams = {
      userName: "Rahul Joshi",
      trialEndDate: "25/08/2025",
      twitterLink: "https://x.com/home",
      linkedinLink: "https://www.linkedin.com/",
      facebookLink: "https://www.facebook.com/",
      helpcenterLink: "https://fdev.soleapp.com.au/",
      privacyLink: "https://fdev.soleapp.com.au/",
      termsLink: "https://fdev.soleapp.com.au/",
      appStoreLink: "https://www.apple.com/in/app-store/",
      playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
      bootcampLink: "https://fdev.soleapp.com.au/",
      supportHubLink: "https://fdev.soleapp.com.au/",
    };

    const supportParams = {
      userName: "Ravi Joshi",
      supportEmail: "test@gmail.com",
      supportEndDate: "25/08/2025",
      twitterLink: "https://x.com/home",
      linkedinLink: "https://www.linkedin.com/",
      facebookLink: "https://www.facebook.com/",
      helpcenterLink: "https://fdev.soleapp.com.au/",
      privacyLink: "https://fdev.soleapp.com.au/",
      termsLink: "https://fdev.soleapp.com.au/",
      appStoreLink: "https://www.apple.com/in/app-store/",
      playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
      loginLink: "https://fdev.soleapp.com.au/",
      regardsBy: "Neeraj Verma",
    };
    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: invitationEmail(inviteParams),
    // });
    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: howToUse(howToUseParams),
    // });
    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: trialOver(trialOverParams),
    // });
    await resend.emails.send({
      from: "PaidEarly <support@paidearly.in>",
      to: adminEmail,
      subject: "Welcome to Sole",
      html: support(supportParams),
    });
    console.log(`Email sent successfully to ${adminEmail}`);
  } catch (error) {
    console.error(`Error sending email to ${adminEmail}:`, error);
  }
};

sendCompanyCreationEmail("2000rahuljoshi@gmail.com");
