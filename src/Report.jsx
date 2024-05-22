import { reportdata } from "./data";

function ReportData({ title, description, description2, description3 }) {
    return (
        <div className="">
            <h4 className="typography-ubuntu-des-tit mb-[10px] lg:mb-[20px]">{title}</h4>
            <ul className=" list-disc">
                <li className="typography-ubuntu-des">{description}</li>
                <li className="typography-ubuntu-des">{description2}</li>
                <li className="typography-ubuntu-des">{description3}</li>
            </ul>
        </div>
    );
}

export default function Report() {
    return (
        <div className="flex flex-col mb-[90px] lg:mb-[150px]">
            <h2 className="typography-h2 text-gradient m-auto mb-[50px]">
                Что входит в отчет?
            </h2>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="max-lg:mb-[30px]">
                    <div className="">
                        <img src={3} alt="" />
                    </div>
                    <ReportData {...reportdata[0]} />
                </div>
                <div className="max-lg:mb-[30px]">
                    <div className="">
                        <img src={3} alt="" />
                    </div>
                    <ReportData {...reportdata[1]} />
                </div>
                <div className="max-lg:mb-[30px]">
                    <div className="">
                        <img src={3} alt="" />
                    </div>
                    <ReportData {...reportdata[2]} />
                </div>
                <div className="max-lg:mb-[30px]">
                    <div className="">
                        <img src={3} alt="" />
                    </div>
                    <ReportData {...reportdata[3]} />
                </div>
            </div>
        </div>
    );
}
