import { Resend } from "resend";
import { adminEmailTemplate } from "./emailTemplate.js";
import dotenv from "dotenv";

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;

const resend = new Resend(resendApiKey);

export const sendCompanyCreationEmail = async (
  adminEmail,
  inviteeName,
  eventType,
  inviteeNameSecond,
  inviteeEmail,
  additionalGuest,
  eventDateAndTime,
  meetingLink,
  inviteeTz
) => {
  try {
    await resend.emails.send({
      from: "Waply <support@paidearly.in>",
      to: adminEmail,
      subject: "New Event: Rahul - 02:00pm Thu, 3 Apr 2025 - 30 Minute Meeting",
      html: adminEmailTemplate(
        inviteeName,
        eventType,
        inviteeNameSecond,
        inviteeEmail,
        additionalGuest,
        eventDateAndTime,
        meetingLink,
        inviteeTz
      ),
    });
    console.log(`Email sent successfully to ${adminEmail}`);
  } catch (error) {
    console.error(`Error sending email to ${adminEmail}:`, error.message);
  }
};

sendCompanyCreationEmail(
  "2000rahuljoshi@gmail.com",
  "Ashish Rautela",
  "60 min meeting with Rahul",
  "Ashish",
  "ashish@gmail.com",
  ["jatin@gmail.com", "ashish@gmail.com"],
  "04:30pm - Friday, 4 April 2025 (Eastern Time - US & Canada)",
  "https://meet.google.com/jzg-xmnb-wpa",
  "India Standard Time"
);
