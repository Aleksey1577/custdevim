import React from "react";
import Email from "./assets/email.svg";
import Tg from "./assets/tg.svg";

export default function Contacts() {
    return (
        <div className="pb-[400px]">
            <div className="text-center mb-[50px]">
                <h1 className="typography-h2 mb-4">Контакты</h1>
                <p>
                    Свяжитесь с нами удобным для вас способом а так же можете
                    оставить заявку и мы Вам перезвоним
                </p>
            </div>
            <div className="flex justify-between">
                <div className="">
                    <div className=" ">
                        <a
                            className="flex justify-between items-center"
                            href=""
                        >
                            Email: hello@custdevim.com{" "}
                            <div className="ml-[20px]">
                                <img src={Email} alt="email" />
                            </div>
                        </a>
                    </div>
                    <div className=" ">
                        <a
                            className="flex justify-between items-center"
                            href=""
                        >
                            Telegram: @custdevim{" "}
                            <div className="ml-[20px]">
                                <img src={Tg} alt="tg" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="">form</div>
            </div>
        </div>
    );
}
