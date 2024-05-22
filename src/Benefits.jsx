// import { benefitsdata } from "./data";
import Ben1 from "./assets/ben-1.png";
import Ben1mob from "./assets/ben-1-mob.png";
import Ben2 from "./assets/ben-2.png";
import Ben2mob from "./assets/ben-2-mob.png";
import Ben3 from "./assets/ben-3.png";
import Ben3mob from "./assets/ben-3-mob.png";
import Ben4 from "./assets/ben-4.png";
import Ben4mob from "./assets/ben-4-mob.png";
import Ben5 from "./assets/ben-5.png";
import Ben5mob from "./assets/ben-5-mob.png";
import Ben6 from "./assets/ben-6.png";
import Ben6mob from "./assets/ben-6-mob.png";

import TabsComponent from "./Tabs";
import React from "react";

export default function TabsPage() {
    return (
        <>
            <div className="">
                <div className="mb-[30px]">
                    <h3 className="typography-h3 mb-[10px]">
                        Как CustDev помогает бизнесу
                    </h3>
                    <p className="typography-ubuntu">
                        После проведения исследования вы можете перестать
                        предполагать потребности клиента и делать поспешные
                        выводы.
                    </p>
                </div>
            </div>
            <TabsComponent items={items} />
        </>
    );
}

const items = [
    {
        title: "Понимание клиентов",
        content: (
            <div className="base-text-benefits flex items-center max-lg:flex-col">
                <img src={Ben1} alt="" className="mr-[50px] max-md:hidden" />
                <img src={Ben1mob} alt="" className=" mb-[30px] md:hidden" />
                <p>
                    CustDev помогает более глубоко понять целевую аудиторию и их
                    боли, страхи и потребности. Это позволяет бизнесу
                    адаптировать свои продукты или услуги так, чтобы они лучше
                    соответствовали ожиданиям и требованиям клиентов.
                </p>
            </div>
        ),
    },
    {
        title: "Улучшение продукта",
        content: (
            <div className="base-text-benefits flex items-center max-lg:flex-col">
                <img src={Ben2} alt="" className="mr-[50px] max-md:hidden" />
                <img src={Ben2mob} alt="" className="md:hidden" />
                <p>
                    С помощью методологии CustDev бизнес может получить обратную
                    связь от клиентов на ранних этапах разработки продукта или
                    услуги. Это позволяет быстро выявить проблемы и слабые места
                    и внести коррективы до того, как продукт будет запущен на
                    рынок.
                </p>
            </div>
        ),
    },
    {
        title: "Снижение рисков",
        content: (
            <div className="base-text-benefits flex items-center max-lg:flex-col">
                <img src={Ben3} alt="" className="mr-[50px] max-md:hidden" />
                <img src={Ben3mob} alt="" className=" mb-[30px] md:hidden" />
                <p>
                    Используя CustDev, компания может уменьшить риски неудачного
                    запуска продукта на рынок, так как она работает с реальными
                    обратными связями и данными от потенциальных пользователей
                    еще до того, как будет сделан крупный финансовый и временной
                    вклад в разработку.
                </p>
            </div>
        ),
    },
    {
        title: "Повышение продаж",
        content: (
            <div className="base-text-benefits flex items-center max-lg:flex-col">
                <img src={Ben4} alt="" className="mr-[50px] max-md:hidden" />
                <img src={Ben4mob} alt="" className=" mb-[30px] md:hidden" />
                <p>
                    Понимание клиентского поведения и мотивации позволяет более
                    точно нацеливать маркетинговые кампании и улучшать стратегии
                    продаж. Это помогает оптимизировать затраты на маркетинг и
                    увеличить конверсию.
                </p>
            </div>
        ),
    },
    {
        title: "Создание лояльности клиентов",
        content: (
            <div className="base-text-benefits flex items-center max-lg:flex-col">
                <img src={Ben5} alt="" className="mr-[50px] max-md:hidden" />
                <img src={Ben5mob} alt="" className=" mb-[30px] md:hidden" />
                <p>
                    При активном включении клиентов в процесс разработки и учете
                    их мнения, вероятность того, что они будут лояльны бренду,
                    увеличивается. Пользователи видят, что их мнение
                    учитывается, и чувствуют себя более привязанными к продукту
                    или услуге.
                </p>
            </div>
        ),
    },
    {
        title: "Достижение продуктовой/рыночной подгонки",
        content: (
            <div className="base-text-benefits flex items-center max-lg:flex-col">
                <img src={Ben6} alt="" className="mr-[50px] max-md:hidden" />
                <img src={Ben6mob} alt="" className=" mb-[30px] md:hidden" />
                <p>
                    Используя CustDev, бизнес стремится достичь этой 'подгонки',
                    исследуя потребности и проблемы клиентов на ранних этапах
                    разработки продукта или услуги. Это позволяет создавать
                    продукты, которые действительно ценятся рынком и за которые
                    пользователи готовы платить.
                </p>
            </div>
        ),
    },
];
