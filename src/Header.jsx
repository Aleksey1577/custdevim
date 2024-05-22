import Button from "./components/Button";
import logo from "./assets/logo.svg"

export default function Header() {
    return (
        <header className="bg-gray rounded-[90px] mt-[20px] md:min-w-[1024px] lg:min-w-[1200px] max-lg:hidden fixed z-10 ">
            <div className="flex justify-between items-center py-[10px] px-[30px]">
                <a href="/">
                    {" "}
                    <img src={logo}  />
                </a>
                <div className=" ">
                    <ul className="flex justify-between typography-header">
                        <li className="">Главная</li>
                        <li className="mx-[30px]">Блог</li>
                        <li className="">Контакты</li>
                    </ul>
                </div>
                <Button />
            </div>
        </header>
    );
}
