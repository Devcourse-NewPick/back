import dotenv from 'dotenv';

dotenv.config();

export const NODEMAILER_CONFIG = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
};

export const NODEMAILER = 'NODEMAILER';
