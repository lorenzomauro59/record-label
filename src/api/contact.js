import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message, soundcloudLink } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "contacto.surbsas@gmail.com", // Reemplaza con el correo al que quieras enviar
      subject: "Nuevo mensaje de contacto",
      html: `
                <h3>Nuevo Mensaje de ${name}</h3>
                <p>${message}</p>
                ${
                  soundcloudLink
                    ? `<p>SoundCloud Link: ${soundcloudLink}</p>`
                    : ""
                }
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
