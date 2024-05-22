import tgIcon from "./assets/telegram.svg"

export default function Footer() {
    return (
        <footer className="bg-black py-[20px] flex justify-around ">
            <div className=" " >
                <a className="typography-footer text-white" href="https://custdevim.com/">
                © 2024 CustDevim
                </a>
            </div>
            <div className="" >
                <a className="" href="">
                    <img src={tgIcon} alt="" />
                </a>
            </div>
        </footer>
    );
}
