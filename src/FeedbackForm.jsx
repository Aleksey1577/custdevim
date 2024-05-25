// import React from "react";
// import { useForm } from "react-hook-form";
// import InputMask from "react-input-mask";
// import axios from "axios";

// const FeedbackForm = ({ onClose }) => {
//     const { register, handleSubmit } = useForm();

//     const onSubmit = async (data) => {
//         try {
//             await axios.post("http://localhost:5000/send-email", data);
//             onClose();
//             alert("Форма успешно отправлена!");
//         } catch (error) {
//             console.error("Ошибка при отправке формы", error);
//             alert("Ошибка при отправке формы. Попробуйте еще раз.");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="p-4">
//             <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Имя
//                 </label>
//                 <input
//                     {...register("name")}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Email
//                 </label>
//                 <input
//                     type="email"
//                     {...register("email")}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Телефон
//                 </label>
//                 <InputMask
//                     mask="+7 (999) 999-9999"
//                     {...register("phone")}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                     Ваша компания
//                 </label>
//                 <input
//                     {...register("company")}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="inline-flex items-center">
//                     <input
//                         type="checkbox"
//                         {...register("privacyPolicy")}
//                         defaultChecked
//                         className="form-checkbox"
//                     />
//                     <span className="ml-2">
//                         Я принимаю политику конфиденциальности
//                     </span>
//                 </label>
//             </div>
//             <div className="flex items-center justify-between">
//                 <button
//                     type="submit"
//                     className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                     Отправить
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default FeedbackForm;

import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import axios from "axios";

const FeedbackForm = ({ onClose }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post("http://localhost:5000/send-email", data);
            onClose();
            alert("Форма успешно отправлена!");
        } catch (error) {
            console.error("Ошибка при отправке формы", error);
            alert("Ошибка при отправке формы. Попробуйте еще раз.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Имя
                </label>
                <input
                    {...register("name")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    {...register("email")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Телефон
                </label>
                <InputMask
                    mask="+7 (999) 999-9999"
                    {...register("phone")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Ваша компания
                </label>
                <input
                    {...register("company")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        {...register("privacyPolicy")}
                        defaultChecked
                        className="form-checkbox"
                    />
                    <span className="ml-2">
                        Я принимаю политику конфиденциальности
                    </span>
                </label>
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Отправить
                </button>
            </div>
        </form>
    );
};

export default FeedbackForm;
