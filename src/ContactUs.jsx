import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_dbql7qj", "template_q6ybfpx", form.current, {
                publicKey: "53WMM4AEfYquvKZln",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <label>Ваше имя</label>
            <input type="text" name="user_name" />
            <label>Ваш Email</label>
            <input type="email" name="user_email" />
            <label>Комментарий (необязательно)</label>
            <textarea className="mb-[20px]" name="message" />
            <button type="submit" value="Send" >Отправить</button>
            {/* // <input className="w-[30px] h-[30px] bg-slate-400" type="submit" value="Send" /> */}
        </form>
    );
};
