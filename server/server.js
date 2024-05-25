const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "alekseykras94@gmail.com",
        pass: "QAZdfhjgplm1+2-",
    },
});

app.post("/send-email", (req, res) => {
    const { name, email, phone, company, privacyPolicy } = req.body;

    const mailOptions = {
        from: "alekseykras94@gmail.com",
        to: "your-email@gmail.com",
        subject: "Новая заявка с формы обратной связи",
        text: `
      Имя: ${name}
      Email: ${email}
      Телефон: ${phone}
      Компания: ${company}
      Политика конфиденциальности: ${privacyPolicy ? "Принята" : "Не принята"}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Ошибка при отправке почты", error);
            res.status(500).send("Ошибка при отправке почты");
        } else {
            console.log("Почта отправлена: " + info.response);
            res.status(200).send("Почта успешно отправлена");
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
