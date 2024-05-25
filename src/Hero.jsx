import { useState } from "react";
import ModalButton from './ModalButton';


export default function Hero() {
    return (
        <div className="flex max-lg:flex-col justify-between pt-[200px] mb-[90px]">
            <div className="flex flex-col max-md:mb-[30px]">
                <h1 className="typography-h1 mb-[30px]">
                    Customer <br />
                    Development
                </h1>
                <p className="typography-base font-semibold text-[26px] mb-[30px]">
                    <span className=" text-gradient">
                        Тестируйте бизнес идеи
                    </span>{" "}
                    на <br /> целевой аудитории и <br />{" "}
                    <span className="text-gradient">
                        запускайте успешные продукты
                    </span>
                </p>
                <div>
                    <ModalButton />
                </div>
            </div>
            <div className="bg-hero-mob lg:bg-hero-desktop w-full h-[300px] lg:h-[500px] bg-center lg:bg-right bg-no-repeat"></div>
        </div>
    );
}
