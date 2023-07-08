import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "empresa.merlin.sistemas@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  const mailData = {
    from: "empresa.merlin.sistemas@gmail.com",
    to: "empresa.merlin.sistemas@gmail.com",
    subject: `Mensagem de ${name} - ${email}`,
    text: message,
    html: `<div>${message}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
    console.log("Email sent");
  } catch (error) {
    console.log("Error", error);
  }
  res.status(200).json(req.body);
}
