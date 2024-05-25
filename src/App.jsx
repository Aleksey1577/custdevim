// import Header from "./Header";
// import Hero from "./Hero";
// import Benefits from "./Benefits";
// import How from "./How";
// import Report from "./Report"
// import CalApp from "./CalApp";
// import Faq from "./Faq";
// import Footer from "./Footer";
// import "./css/App.css";
// import Courusel from "./Courusel";

// export default function App() {
//     return (
//         <>
//             <div className=" mx-[20px] lg:m-auto  lg:max-w-[1200px]">
//                 <Header />
//                 <Hero />
//                 <Benefits />
//                 <How />
//                 <Report/>
//                 <Courusel/>
//                 <CalApp />
//                 <Faq />
//             </div>
//             <Footer />
//         </>
//     );
// }

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Benefits from "./Benefits";
import HowWork from "./HowWork";
import Report from "./Report";
import CalApp from "./CalApp";
import Faq from "./Faq";
import Footer from "./Footer";
import Contacts from "./Contacts";
import Blog from "./Blog";
import "./css/App.css";
import Carousel from "./Carousel";
import WorkDetail from "./WorkDetail";
import ArticleDetail from "./ArticleDetail";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen ">
                <div className="flex justify-center ">
                    <Header />
                </div>
                <div className="mx-[15px] lg:m-auto lg:max-w-[1200px]">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Benefits />
                                    <HowWork />
                                    <Report />
                                    <Carousel />
                                    <CalApp />
                                    <Faq />
                                </>
                            }
                        />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<ArticleDetail />} />
                        <Route path="/work/:id" element={<WorkDetail />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

// export default function App() {
//     return (
//         <Router>
//             <div className="flex flex-col min-h-screen">
//                 <Header />
//                 <div className="flex-grow mx-[20px] lg:m-auto lg:max-w-[1200px] mt-[120px]">
//                     <Routes>
//                         <Route path="/" element={
//                             <>
//                                 <Hero />
//                                 <Benefits />
//                                 <How />
//                                 <Report />
//                                 <Carousel />
//                                 <CalApp />
//                                 <Faq />
//                             </>
//                         } />
//                         <Route path="/contacts" element={<Contacts />} />
//                         <Route path="/blog" element={<Blog />} />
//                         <Route path="/blog/:id" element={<ArticleDetail />} />
//                         <Route path="/work/:id" element={<WorkDetail />} />
//                     </Routes>
//                 </div>
//                 <Footer />
//             </div>
//         </Router>
//     );
// }
