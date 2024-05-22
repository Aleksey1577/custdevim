import Accordion from "./Accordion";
import { faqdata } from "./data";


export default function Faq() {
    return (
        <div className=" mb-[100px]">
            <div className="text-center  mb-[50px]">
                <h3 className="text-gradient typography-h2  mb-[20px]">
                    Часто задаваемые вопросы про CustDev
                </h3>
                <p className="typography-ubuntu-des">
                    Мы собрали самые запутанные вопросы, на которые быстро даны
                    ответы. Если по какой-то причине вашего вопроса здесь нет,
                    смело обращайтесь к нам.
                </p>
            </div>
            <Accordion {...faqdata[0]} />
            <Accordion {...faqdata[1]} />
            <Accordion {...faqdata[2]} />
            <Accordion {...faqdata[3]} />
            <Accordion {...faqdata[4]} />
            <Accordion {...faqdata[5]} />
        </div>
    );
}
