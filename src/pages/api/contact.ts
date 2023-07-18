import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@merlin.app.br",
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = JSON.parse(req.body);

  const mailData = {
    from: "noreply@merlin.app.br",
    to: "merlin@merlin.app.br",
    subject: `Mensagem de ${name} - ${email}`,
    text: message,
    html: `
      <div>
        <h2>Nome: ${name}</h2>
        <h2>Email: ${email}</h2>
        <p>Mensagem: ${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailData);
    console.log("Email sent");
  } catch (error) {
    console.log("Error", error);
  }
  res.status(200).json(req.body);
}
