import { Resend } from "resend";
import dotenv from "dotenv";
import { invitationEmail } from "./EmailTemplates/invitationEmail.js";
import { howToUse } from "./EmailTemplates/howToUse.js";
import { trialOver } from "./EmailTemplates/trialOver.js";
import { support } from "./EmailTemplates/support.js";
import { quotes } from "./EmailTemplates/quotes.js";
import { verification } from "./EmailTemplates/verification.js";
import { otp } from "./EmailTemplates/otp.js";
import { invoiceReminder } from "./EmailTemplates/invoiceReminder.js";
import { transactionListing } from "./EmailTemplates/transactionListing.js";
import { invoice } from "./EmailTemplates/invoice.js";
import { welcome } from "./EmailTemplates/welcome.js";

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;

const resend = new Resend(resendApiKey);

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
  regardsBy: "Johann Oberholzer",
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

const quoteParams = {
  userName: "Ashish Rautela",
  quoteAmt: "AUD $225.00",
  quoteId: "22222222",
  twitterLink: "https://x.com/home",
  linkedinLink: "https://www.linkedin.com/",
  facebookLink: "https://www.facebook.com/",
  helpcenterLink: "https://fdev.soleapp.com.au/",
  privacyLink: "https://fdev.soleapp.com.au/",
  termsLink: "https://fdev.soleapp.com.au/",
  appStoreLink: "https://www.apple.com/in/app-store/",
  playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
};

const verificationParams = {
  userName: "Ravi Joshi",
  verifyAccountLink: "https://fdev.soleapp.com.au/",
  twitterLink: "https://x.com/home",
  linkedinLink: "https://www.linkedin.com/",
  facebookLink: "https://www.facebook.com/",
  helpcenterLink: "https://fdev.soleapp.com.au/",
  privacyLink: "https://fdev.soleapp.com.au/",
  termsLink: "https://fdev.soleapp.com.au/",
  appStoreLink: "https://www.apple.com/in/app-store/",
  playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
};

const otpParams = {
  userName: "Ashish Rautela",
  otp: "123456",
  twitterLink: "https://x.com/home",
  linkedinLink: "https://www.linkedin.com/",
  facebookLink: "https://www.facebook.com/",
  helpcenterLink: "https://fdev.soleapp.com.au/",
  privacyLink: "https://fdev.soleapp.com.au/",
  termsLink: "https://fdev.soleapp.com.au/",
  appStoreLink: "https://www.apple.com/in/app-store/",
  playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
};

const invoiceReminderParams = {
  userName: "Ashish Rautela",
  invoiceNo: "INV-123456",
  invoiceAmt: "AUD $225.00",
  invoiceFrom: "Rahul Joshi",
  dueDate: "01 Aug 2025",
  bsbNo: "001122",
  accNo: "XXX1234",
  regardsBy: "Rahul Joshi",
  twitterLink: "https://x.com/home",
  linkedinLink: "https://www.linkedin.com/",
  facebookLink: "https://www.facebook.com/",
  helpcenterLink: "https://fdev.soleapp.com.au/",
  privacyLink: "https://fdev.soleapp.com.au/",
  termsLink: "https://fdev.soleapp.com.au/",
  appStoreLink: "https://www.apple.com/in/app-store/",
  playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
};

const transactionListingParams = {
  userName: "Ashish Rautela",
  transactionTo: "01 Aug 2025",
  transactionFrom: "15 Aug 2025",
  twitterLink: "https://x.com/home",
  linkedinLink: "https://www.linkedin.com/",
  facebookLink: "https://www.facebook.com/",
  helpcenterLink: "https://fdev.soleapp.com.au/",
  privacyLink: "https://fdev.soleapp.com.au/",
  termsLink: "https://fdev.soleapp.com.au/",
  appStoreLink: "https://www.apple.com/in/app-store/",
  playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
};

const newInvoiceParams = {
  userName: "Ashish Rautela",
  invoiceNo: "INV-123456",
  invoiceAmt: "AUD $225.00",
  dueDate: "01 Aug 2025",
  worldPayLink: "https://worldpay.com/en-GB",
  twitterLink: "https://x.com/home",
  linkedinLink: "https://www.linkedin.com/",
  facebookLink: "https://www.facebook.com/",
  helpcenterLink: "https://fdev.soleapp.com.au/",
  privacyLink: "https://fdev.soleapp.com.au/",
  termsLink: "https://fdev.soleapp.com.au/",
  appStoreLink: "https://www.apple.com/in/app-store/",
  playStoreLink: "https://play.google.com/store/games?hl=en_IN&pli=1",
};

const welcomeEmailParams = {
  videoLink:
    "https://www.youtube.com/watch?v=pRpeEdMmmQ0&list=RDkJQP7kiw5Fk&index=2",
  completeSetupBtnLink: "https://fdev.soleapp.com.au/",
  bootcampLink: "https://fdev.soleapp.com.au/",
  knowledgeHubLink: "https://fdev.soleapp.com.au/",
  unsubscribeLink: "https://fdev.soleapp.com.au/",
  twitterLink: "https://x.com/home",
  linkedinLink: "https://www.linkedin.com/",
  facebookLink: "https://www.facebook.com/",
  helpcenterLink: "https://fdev.soleapp.com.au/",
  privacyLink: "https://fdev.soleapp.com.au/",
  termsLink: "https://fdev.soleapp.com.au/",
};

const pdfBase64 = async () => {
  const response = await fetch(
    "https://morth.nic.in/sites/default/files/dd12-13_0.pdf"
  );
  const pdfBuffer = await response.arrayBuffer();
  const convertedBase64 = Buffer.from(pdfBuffer).toString("base64");
  return convertedBase64;
};

const xlsxBase64 = async () => {
  const response = await fetch(
    "https://filesamples.com/samples/document/xlsx/sample1.xlsx"
  );
  const xlsxBuffer = await response.arrayBuffer();
  const convertedBase64 = Buffer.from(xlsxBuffer).toString("base64");
  return convertedBase64;
};

export const sendCompanyCreationEmail = async (adminEmail) => {
  try {
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

    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: support(supportParams),
    // });

    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: quotes(quoteParams),
    // });

    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: verification(verificationParams),
    // });

    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: otp(otpParams),
    // });

    // const invoiceReminderBase64 = await pdfBase64();
    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: invoiceReminder(invoiceReminderParams),
    //   attachments: [
    //     {
    //       filename: "INV-02.pdf",
    //       content: invoiceReminderBase64,
    //     },
    //   ],
    // });

    // const transListingBase64 = await xlsxBase64();
    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: transactionListing(transactionListingParams),
    //   attachments: [
    //     {
    //       filename: "report.xlsx",
    //       content: transListingBase64,
    //     },
    //   ],
    // });

    // const newInvoiceBase64 = await pdfBase64();
    // await resend.emails.send({
    //   from: "PaidEarly <support@paidearly.in>",
    //   to: adminEmail,
    //   subject: "Welcome to Sole",
    //   html: invoice(newInvoiceParams),
    //   attachments: [
    //     {
    //       filename: "INV-02.pdf",
    //       content: newInvoiceBase64,
    //     },
    //   ],
    // });

    await resend.emails.send({
      from: "PaidEarly <support@paidearly.in>",
      to: adminEmail,
      subject: "Welcome to Sole",
      html: welcome(welcomeEmailParams),
    });
    console.log(`Email sent successfully to ${adminEmail}`);
  } catch (error) {
    console.error(`Error sending email to ${adminEmail}:`, error);
  }
};

sendCompanyCreationEmail("asisrautela612@gmail.com");
