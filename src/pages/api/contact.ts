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
  const { name, phone, email, message } = req.body;

  const mailData = {
    from: "noreply@merlin.app.br",
    to: "merlin@merlin.app.br",
    subject: `Contato de ${name} - Merlin Tech`,
    text: `
      Nome: ${name}
      Telefone: ${phone}
      Email: ${email}
      Mensagem: ${message}
    `,
    html: `
      <p>Nome: ${name}</p>
      <p>Telefone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Mensagem: ${message}</p>
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
