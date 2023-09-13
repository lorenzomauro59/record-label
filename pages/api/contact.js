import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message, soundcloudLink } = req.body;

    const user = process.env.EMAIL_USER;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: user,
      to: "holobeatrecords@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
                <h3>New message from ${name}</h3>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
                ${soundcloudLink ? `<p>Demo link: ${soundcloudLink}</p>` : ""}
            `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Mensaje enviado correctamente");
    } catch (error) {
      console.error(error);
      res.status(500).send("Hubo un error al enviar el mensaje");
    }
  } else {
    res.status(405).end();
  }
};
