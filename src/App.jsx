import Header from "./Header";
import Hero from "./Hero";
import Benefits from "./Benefits";
import How from "./How";
import Report from "./Report"
import CalApp from "./CalApp";
import Faq from "./Faq";
import Footer from "./Footer";
import "./css/App.css";

export default function App() {
    return (
        <>
            <div className=" mx-[20px] lg:m-auto  lg:max-w-[1200px]">
                <Header />
                <Hero />
                <Benefits />
                <How />
                <Report/>
                <CalApp />
                <Faq />
            </div>
            <Footer />
        </>
    );
}
