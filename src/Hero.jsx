import { useState } from "react";
import Modal from "./Modal";
import Button from "./components/Button";

export default function Hero() {
    const [modalActive, setModalActive] = useState(true);
    return (
        <div className="flex max-lg:flex-col justify-between pt-[200px] mb-[90px]">
            <div className="flex flex-col max-md:mb-[30px]">
                <h1 className="typography-h1 mb-[30px]">
                    Customer <br />
                    Development
                </h1>
                <p className="base-text mb-[30px]">
                    <span className=" text-gradient">
                        Тестируйте бизнес идеи
                    </span>{" "}
                    на <br /> целевой аудитории и <br />{" "}
                    <span className="text-gradient">
                        запускайте успешные продукты
                    </span>
                </p>
                <div>
                    {" "}
                    {/* <Button onClick={() => setModalActive(value)} />
                    <Modal active={modalActive} setActive={setModalActive} /> */}
                    <Modal />
                </div>
            </div>
            <div className="bg-hero-mob lg:bg-hero-desktop w-full h-[300px] lg:h-[500px] bg-center lg:bg-right bg-no-repeat"></div>
        </div>
    );
}
