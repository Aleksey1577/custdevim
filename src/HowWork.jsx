import { howworkdata } from "./data";

function HowWorkDescription({ title, description}) {
    return (
        <li className="mb-[30px] ">
            <h3 className="typography-h3 mb-[15px]">{title} </h3>
            <p className="typography-base">{description}</p>
            <div className="mt-[40px]  border-b-[2px] border-gray"></div>
        </li>
    );
}

export default function HowWork() {
    return (
        <div className="mb-[150px]">
            <div className="flex flex-col lg:justify-between mb-[50px]">
                <h3 className="typography-h2 mb-[20px] ">Как работает CustDev?</h3>
                <p className="typography-base block">
                    Разработка нового продукта или улучшение уже существующего –
                    задача не из легких. Как сделать продукт востребованным и
                    успешным? Ответ прост: узнать мнение тех, для кого он
                    создается – клиентов.
                </p>
            </div>
            <div className="">
                <ul>
                    <HowWorkDescription {...howworkdata[0]} />
                    <HowWorkDescription {...howworkdata[1]} />
                    <HowWorkDescription {...howworkdata[2]} />
                    <HowWorkDescription {...howworkdata[3]} />
                </ul>
            </div>
        </div>
    );
}
