import React, { useState } from "react";

export default function Accardion({ title, answer }) {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="mb-[20px] border-b-[2px]  border-gray">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full typography-faq mb-[20px]"
            >
                <span className="">{title}</span>
                <svg
                    className="fill-indigo-500 shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="3"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                            accordionOpen && "!rotate-180"
                        }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="3"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            accordionOpen && "!rotate-180"
                        }`}
                    />
                </svg>{" "}
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                } `}
            >
                <div className="overflow-hidden typography-base ">
                    {answer}
                </div>
            </div>
        </div>
    );
}
