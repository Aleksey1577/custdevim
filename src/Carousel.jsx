// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const works = [
//     {
//         id: 1,
//         title: "Сделали CJM",
//         description: "С помощью CJM компания создала удобный сайт",
//         imageUrl: "/src/assets/cases1.png",
//     },
//     {
//         id: 2,
//         title: "Создали востребованный продукт",
//         description:
//             "Смогли создать продукт, который был востребован нашей целевой аудиторией",
//         imageUrl: "/src/assets/cases2.png",
//     },
//     {
//         id: 3,
//         title: "Как мы нашли каналы привлечения",
//         description:
//             "Смогли разработать эффективную маркетинговую стратегию, которая помогла нам достичь нашей целевой аудитории.",
//     },
//     { id: 4, title: "Work 4", description: "Description of work 4" },
//     // Добавьте больше работ по необходимости
// ];

// const Carousel = () => {
//     const navigate = useNavigate();

//     const handleButtonClick = (id, event) => {
//         event.preventDefault();
//         navigate(`/work/${id}`, { state: { scrollPosition: window.scrollY } });
//     };

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//     };

//     return (
//         <div className="container mx-auto mt-8 mb-[100px]">
//             <h2 className="text-3xl font-bold  text-center mb-[30px]">
//                 Наши кейсы
//             </h2>
//             <Slider {...settings}>
//                 {works.map((work) => (
//                     <div key={work.id} className="px-4">
//                         <div className="bg-white rounded-lg shadow-xl m-[5px] mb-[50px]">
//                             <div className="p-5">
//                                 <img
//                                     src={work.imageUrl}
//                                     alt={work.title}
//                                     className="w-full h-48 object-cover rounded-lg mb-4"
//                                 />
//                                 <h3 className="typography-ubuntu-des mb-[15px]">
//                                     {work.title}
//                                 </h3>
//                                 <p>{work.description}</p>
//                                 <button
//                                     className="text-blue  mt-4"
//                                     onClick={(e) =>
//                                         handleButtonClick(work.id, e)
//                                     }
//                                 >
//                                     Подробнее
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default Carousel;

import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const works = [
    {
        id: 1,
        title: "Сделали CJM",
        description: "С помощью CJM компания создала удобный сайт",
        imageUrl: "/src/assets/cases1.png",
    },
    {
        id: 2,
        title: "Создали востребованный продукт",
        description:
            "Смогли создать продукт, который был востребован нашей целевой аудиторией",
        imageUrl: "/src/assets/cases2.png",
    },
    {
        id: 3,
        title: "Как мы нашли каналы привлечения",
        description:
            "Смогли разработать эффективную маркетинговую стратегию, которая помогла нам достичь нашей целевой аудитории.",
    },
    { id: 4, title: "Work 4", description: "Description of work 4" },
    // Добавьте больше работ по необходимости
];

const Carousel = () => {
    const navigate = useNavigate();

    const handleButtonClick = (id, event) => {
        event.preventDefault();
        navigate(`/work/${id}`, { state: { scrollPosition: window.scrollY } });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="container mx-auto mt-8 mb-[100px]">
            <h2 className="text-3xl font-bold  text-center mb-[30px]">
                Наши кейсы
            </h2>
            <Slider {...settings}>
                {works.map((work) => (
                    <div key={work.id} className="px-4">
                        <div className="bg-white rounded-lg shadow-xl m-[5px] mb-[50px]">
                            <div className="p-5">
                                <img
                                    src={work.imageUrl}
                                    alt={work.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="typography-ubuntu-des mb-[15px]">
                                    {work.title}
                                </h3>
                                <p>{work.description}</p>
                                <button
                                    className="text-blue  mt-4"
                                    onClick={(e) =>
                                        handleButtonClick(work.id, e)
                                    }
                                >
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
