import Button from "./views/components/Button";
import logo from "./assets/logo.svg"

export default function Header() {
    return (
        <header className="bg-gray rounded-[90px] mt-[20px]">
            <div className="flex justify-between items-center p-[20px]">
                <a href="">
                    {" "}
                    <img src={logo}  />
                </a>
                <div className=" ">
                    <ul className="flex justify-between typography-header">
                        <li className="">Главная</li>
                        <li className="mx-[20px]">Блог</li>
                        <li className="">Контакты</li>
                    </ul>
                </div>
                <Button />
            </div>
        </header>
    );
}
