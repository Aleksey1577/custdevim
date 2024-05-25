// import React, { useEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";

// const works = [
//     { id: 1, title: "Сделали CJM", description: "Проблема: Компания разрабатывала новый веб-сайт для продажи билетов на мероприятия. Задача была сделать сайт максимально удобным для пользователей, но не были уверены, с чего начать." },
//     { id: 2, title: "Work 2", description: "Full description of work 2" },
//     { id: 3, title: "Work 3", description: "Full description of work 3" },
//     { id: 4, title: "Work 4", description: "Full description of work 4" },
//     // Добавьте больше работ по необходимости
// ];

// const WorkDetail = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const work = works.find((w) => w.id === parseInt(id));

//     useEffect(() => {
//         if (location.state && location.state.scrollPosition) {
//             window.scrollTo(0, location.state.scrollPosition);
//         }
//     }, [location.state]);

//     return (
//         <div className="container mx-auto mt-8">
//             {work ? (
//                 <div className="bg-white rounded-lg shadow-lg p-4">
//                     <h2 className="text-3xl font-bold mb-4">{work.title}</h2>
//                     <p>{work.description}</p>
//                     <button
//                         className="mt-4 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
//                         onClick={() => navigate(-1)}
//                     >
//                         Закрыть
//                     </button>
//                 </div>
//             ) : (
//                 <p>Работа не найдена</p>
//             )}
//         </div>
//     );
// };

// export default WorkDetail;

import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const works = [
    {
        id: 1,
        title: "Сделали CJM",
        description:
            "Проблема: Компания разрабатывала новый веб-сайт для продажи билетов на мероприятия. Задача была сделать сайт максимально удобным для пользователей, но не были уверены, с чего начать.",
    },
    { id: 2, title: "Work 2", description: "Full description of work 2" },
    { id: 3, title: "Work 3", description: "Full description of work 3" },
    { id: 4, title: "Work 4", description: "Full description of work 4" },
    // Добавьте больше работ по необходимости
];

const WorkDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const work = works.find((w) => w.id === parseInt(id));

    useEffect(() => {
        if (location.state && location.state.scrollPosition) {
            window.scrollTo(0, location.state.scrollPosition);
        }
    }, [location.state]);

    return (
        <div className="container mx-auto pt-[150px]">
            {work ? (
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-3xl font-bold mb-4">{work.title}</h2>
                    <p>{work.description}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
                        onClick={() => navigate(-1)}
                    >
                        Закрыть
                    </button>
                </div>
            ) : (
                <p>Работа не найдена</p>
            )}
        </div>
    );
};

export default WorkDetail;
