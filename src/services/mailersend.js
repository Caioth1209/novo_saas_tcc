import { MailerSend } from 'mailersend';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_KEY,
});

export default mailerSend; 