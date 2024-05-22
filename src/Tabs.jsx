"use client";
import { useState, useEffect, useRef } from "react";

export default function TabsComponent({ items }) {
    const [selectedTab, setSelectedTab] = useState(0);
    const firstBtnRef = useRef();

    useEffect(() => {
        firstBtnRef.current.focus();
    }, []);

    return (
        <>
            <div className=" flex flex-col ">
                <div className="mb-[20px] overflow-auto max-md:flex ">
                    {items.map((item, index) => (
                        <button
                            ref={index === 0 ? firstBtnRef : null}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className={`outline-none  inline-block mb-[20px] mr-[10px] lg:mr-[30px]  lg:py-[10px] px-[10px] lg:px-[15px] hover:bg-blue hover:text-max-white rounded-[30px] border-[2px] border-blue text-center  focus:bg-blue focus:text-white ${
                                selectedTab === index
                                    ? "ring-2 bg-white text-blue"
                                    : ""
                            } `}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className="bg-white p-2 rounded-xl">
                    {items.map((item, index) => (
                        <div
                            className={`${
                                selectedTab === index ? "" : "hidden"
                            }`}
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
