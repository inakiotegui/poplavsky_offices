import React from "react";
import "./Banner.css";

export default function Banner({ backgroundLogo, backgroundImage, backgroundGradient, title, subtitle }) {
    return (
        <div
            style={{
                background: backgroundGradient,
            }}>

            <div
                className="BannerMobile md:Banner"
                style={{
                    backgroundImage: `url(${backgroundImage}), url(${backgroundLogo})`,
                }}
            >
                <div className="grid grid-nogutter nested-grid justify-content-center align-content-center h-18rem md:h-22rem scalein animation-duration-300 animation-iteration-1">
                    <div className="w-full md:w-10  md:text-center">
                        <h2 className="text-white text-2xl md:text-4xl m-2">{title}</h2>
                        <h4 className="m-0 text-xs md:text-lg w-full font-normal text-gray-500 m-2">{subtitle}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}