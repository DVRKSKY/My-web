
import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";

interface EmailData {
    html: string;
    to: string;
    subject: string;

}

const sendEmail = async (data: EmailData) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "amadeoconflores@gmail.com",
      pass: "rxeqneciajclohgi",
    },
  });

  const mailOptions = {
    from: "'Amadeo Flores' <amadeoconflores@gmail.com>",
    to: data.to,
    subject: data.subject,
    html: data.html,
  };
  const info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  return;
};

exports.createEmailFromDoc =
  functions.firestore.document("email/{id}").onCreate(
    async (snap) => {
      const newEmail = snap.data() as EmailData;
      try {
        await sendEmail(newEmail);
        await snap.ref.update({
          status: "success",
        });
      } catch (error: any) {
        await snap.ref.update({
          status: "error",
          mensajeError: error.message,
        });
      }
    }
  );
exports.sendEmail = functions.https.onRequest(async (req: any, res: any) => {
  if (req.method !== "POST") {
    return res.status(400).send("Por favor, envíe una solicitud POST");
  }
  try {
    await sendEmail(req.body);
    return res.status(200).send("Email sent");
  } catch (error: any) {
    if (error instanceof functions.https.HttpsError) {
      return res.status(400).send(error.message);
    } else {
      return res.status(500).send(error.message);
    }
  }
});
