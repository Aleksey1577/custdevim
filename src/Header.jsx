// import Button from "./components/Button";
// import logo from "./assets/logo.svg"

// export default function Header() {
//     return (
//         <header className="bg-gray rounded-[90px] mt-[20px] md:min-w-[1024px] lg:min-w-[1200px] max-lg:hidden fixed z-10 ">
//             <div className="flex justify-between items-center py-[10px] px-[30px]">
//                 <a href="/">
//                     {" "}
//                     <img src={logo}  />
//                 </a>
//                 <div className=" ">
//                     <ul className="flex justify-between typography-header">
//                         <li className="">Главная</li>
//                         <li className="mx-[30px]">Блог</li>
//                         <li className="">Контакты</li>
//                     </ul>
//                 </div>
//                 <Button />
//             </div>
//         </header>
//     );
// }
{/* <header className="bg-gray rounded-[90px] mt-[20px] max-lg:hidden fixed z-10 w-full">
<div className="flex justify-between items-center py-[10px] px-[30px] mx-auto lg:max-w-[1200px]"> */}


import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import logo from './assets/logo.svg';

export default function Header() {
    return (
        <header className="bg-gray rounded-[90px] mt-[20px] md:min-w-[1024px] lg:min-w-[1200px] max-lg:hidden fixed z-10">
            <div className="flex justify-between items-center py-[10px] px-[30px] mx-auto lg:max-w-[1200px]">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className=''>
                    <ul className="flex justify-between typography-base">
                        <li className="">
                            <Link to="/" className="text-blue-500 hover:underline">
                                Главная
                            </Link>
                        </li>
                        <li className="mx-[30px]">
                            <Link to="/blog" className="text-blue-500 hover:underline">
                                Блог
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="text-blue-500 hover:underline">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
                <Button />
            </div>
        </header>
    );
}




// import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from './components/Button';
// import logo from './assets/logo.svg';

// export default function Header() {
//     return (
//         <header className="bg-gray rounded-[90px] mt-[20px] max-lg:hidden fixed z-10 w-full">
//             <div className="flex justify-between items-center py-[10px] px-[30px] mx-auto lg:max-w-[1200px]">
//                 <Link to="/">
//                     <img src={logo} alt="Logo" />
//                 </Link>
//                 <div>
//                     <ul className="flex justify-between typography-header">
//                         <li className="">
//                             <Link to="/" className="text-blue-500 hover:underline">
//                                 Главная
//                             </Link>
//                         </li>
//                         <li className="mx-[30px]">
//                             <Link to="/blog" className="text-blue-500 hover:underline">
//                                 Блог
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/contacts" className="text-blue-500 hover:underline">
//                                 Контакты
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <Button />
//             </div>
//         </header>
//     );
// }

