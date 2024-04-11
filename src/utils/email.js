import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ahmeddoma677@gmail.com",
      pass: "yhhqdcwbgzahmjss",
    },
  });
  const info = await transporter.sendMail({
    from: '"foo" <ahmeddoma677@gmail.com>',
    to: options.email,
    subject: "Hello ✔",
    html: options.template,
  });
};
