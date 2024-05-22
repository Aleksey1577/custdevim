import "./css/modal.css";
import React from "react";
import Popup from "reactjs-popup";
import emailjs from "@emailjs/browser";
import { ContactUs } from "./ContactUs";

export default function Modal() {
    const sendEmail = (e) => {
        e.preventDefault();
        alert("Отправлено");
    };
    return (
        <Popup
            trigger={
                <button className="bg-blue hover:bg-dark-blue typography-button h-[50px] px-[40px] rounded-[30px]">
                    Оставить заявку
                </button>
            }
            modal
            nested
        >
            {(close) => (
                <div className="modal p-[40px] lg:min-w-[560px] bg-gray">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> Оставьте заявку</div>
                    <div className="content">
                        <ContactUs /> 
                        {/* <form action="" onSubmit={sendEmail}>
                            <div className="flex flex-col">
                                <div class="mb-[20px] h-[40px] lg:mb-[25px] lg:h-[60px]">
                                    <label for="name"></label>
                                    <input
                                        class="typography-description h-full w-full rounded-[5px] border border-gray pl-[20px] pr-[12px] focus:outline-none"
                                        type="text"
                                        placeholder="Ваше имя"
                                    />
                                </div>
                                <div class="mb-[20px] h-[40px] lg:mb-[25px] lg:h-[60px]">
                                    <label for="name"></label>
                                    <input
                                        class="typography-description h-full w-full rounded-[5px] border border-gray pl-[20px] pr-[12px] focus:outline-none"
                                        type="text"
                                        placeholder="Название вашей компании"
                                    />
                                </div>
                                <div class="mb-[20px] h-[40px] lg:mb-[25px] lg:h-[60px]">
                                    <label for="name"></label>
                                    <input
                                        class="typography-description h-full w-full rounded-[5px] border border-gray pl-[20px] pr-[12px] focus:outline-none"
                                        type="text"
                                        placeholder="Комментарий (необязательно)"
                                    />
                                </div>
                                <div class="mb-[15px] lg:mb-[20px]">
                                    <input class="mr-[15px]" type="checkbox" />
                                    <label class="typography-base" for="">
                                        Я согласен с политикой
                                        конфиденциальности
                                    </label>
                                </div>
                            </div>
                        </form> */}
                    </div>
                    <div className="actions">
                        <Popup
                            trigger={
                                <button className="button"> Trigger </button>
                            }
                            position="top center"
                            nested
                        >
                            <span>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Beatae magni omnis delectus
                                nemo, maxime molestiae dolorem numquam mollitia,
                                voluptate ea, accusamus excepturi deleniti
                                ratione sapiente! Laudantium, aperiam doloribus.
                                Odit, aut.
                            </span>
                        </Popup>
                        <button
                            className="bg-blue hover:bg-dark-blue typography-button h-[50px] px-[40px] rounded-[30px]"
                            onClick={() => {
                                console.log("modal closed ");
                                close();
                            }}
                        >
                            close modal
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}
