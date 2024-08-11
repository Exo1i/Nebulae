import React, {useState} from "react";
import {AboutNebulae} from "../../components/AboutNebulae";
import {Frame9} from "../../components/Frame9";
import {PropertyDefaultWrapper} from "../../components/PropertyDefaultWrapper";
import ChatBotOverlay from "../../components/ChatBotOverlay/ChatBotOverlay";

export const Desktop = () => {
    const [isChatBotOpen, setIsChatBotOpen] = useState(false);
    return (
        <div className="bg-[#eff8fd] flex flex-row justify-center w-full">
            <div className="bg-[#eff8fd] overflow-hidden w-[1440px] h-[1024px] relative">
                <div
                    className="absolute w-[1440px] h-[105px] top-0 left-0 bg-[#131113] border border-solid border-black">
                    <div
                        className="inline-flex items-center justify-center gap-[340px] relative top-[17px] left-[146px]">
                        <img className="relative w-[254px] h-[87px] object-cover" alt="Image" src="/img/image-2.png" />
                        <div className="relative w-[627px] h-[27px]">
                            <div className="gap-36 absolute top-0 left-0 inline-flex items-center">
                                <AboutNebulae property1="active" propertyInactiveClassName="!relative" />
                                <AboutNebulae
                                    property1="inactive"
                                    propertyInactive="/img/about-nebulae.svg"
                                    propertyInactiveClassName="!relative !left-[unset] !w-[93px] !top-[unset]"
                                />
                                <AboutNebulae
                                    property1="inactive"
                                    propertyInactive="/img/about-nebulae-1.svg"
                                    propertyInactiveClassName="!relative !left-[unset] !w-[98px] !top-[unset]"
                                />
                            </div>
                            <img className="absolute w-[13px] h-[7px] top-[13px] left-[615px]" alt="Vector"
                                 src="/img/vector-1.svg" />
                        </div>
                    </div>
                </div>
                <div
                    className="absolute w-[166px] h-[102px] top-10 left-[1645px] rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
                    <AboutNebulae
                        property1="inactive"
                        propertyInactive="/img/property-1-inactive-1.png"
                        propertyInactiveClassName="!left-[-1008px] !top-[493px]"
                    />
                    <AboutNebulae property1="active" propertyInactiveClassName="!absolute !left-5 !top-[61px]" />
                </div>
                <div className="absolute w-[1280px] h-[360px] top-[152px] left-20 rounded-[26px]">
                    <div
                        className="absolute top-40 left-[108px] [font-family:'Poppins',Helvetica] font-bold text-white text-[15px] tracking-[0] leading-[normal]">
                        {""}
                    </div>
                    <div
                        className="flex flex-col w-[1280px] h-[360px] items-start gap-2.5 px-[71px] py-[57px] absolute top-0 left-0 rounded-[26px] bg-[url(/static/img/frame-9.svg)] bg-cover bg-[50%_50%]">
                        <div
                            className="flex flex-col w-[1123px] items-start justify-center gap-1 relative flex-[0_0_auto]">

                            <div className="flex flex-col w-[317px] items-start gap-[5px] relative flex-[0_0_auto]">


                            </div>
                        </div>
                        <div className="relative w-[100px] h-[100px] mb-[-33.00px]" />
                    </div>
                </div>
                <div className="absolute w-[382px] h-[309px] top-[578px] left-[107px]">
                    <div className="relative h-[309px] rounded-[10px]">
                        <PropertyDefaultWrapper
                            className="!h-[309px] !absolute !left-0 !w-[382px] !top-0"
                            divClassName="!mt-[unset]"
                            framePropertyDefaultClassName="!relative"
                            frameVector="/img/vector-3-8.svg"
                            property1="default"
                            text="Build intelligent apps at enterprise scale with our AI portfolio."
                        />
                        <div
                            className="flex w-[47px] h-[26px] items-center justify-center gap-1.5 absolute top-[35px] left-[55px]">
                            <img className="relative w-[7.06px] h-[12.71px]" alt="Vector" src="/img/vector-2.svg" />
                            <div
                                className="relative w-fit [font-family:'Source_Code_Pro',Helvetica] font-semibold text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
                                AI
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[382px] h-[309px] top-[578px] left-[539px]">
                    <div className="relative h-[309px] rounded-[10px]">
                        <PropertyDefaultWrapper
                            className="!h-[309px] !absolute !left-0 !bg-[#1d1b20] !w-[382px] !top-0"
                            divClassName="!mt-[unset]"
                            framePropertyDefaultClassName="!relative"
                            frameVector="/img/vector-3-8.svg"
                            property1="default"
                            text="Reimagine your business and enable security and compliance at scale"
                        />
                        <div
                            className="w-[141px] flex h-[26px] items-center justify-center gap-1.5 absolute top-[35px] left-[55px]">
                            <img className="relative w-[7.06px] h-[12.71px]" alt="Vector" src="/img/vector-2-1.svg" />
                            <div
                                className="relative w-fit [font-family:'Source_Code_Pro',Helvetica] font-semibold text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
                                Industry
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[382px] h-[309px] top-[578px] left-[970px]">
                    <div className="relative h-[309px] rounded-[10px]">
                        <div
                            className="bg-[#090401] flex flex-col w-[382px] h-[309px] items-center justify-center gap-6 pt-[54px] pb-[31px] px-[35px] absolute top-0 left-0 rounded-[10px]">
                            <p className="relative w-[185px] [font-family:'Source_Code_Pro',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[15px]">
                                Build, run, and grow games with purpose-built, developer-friendly solutions
                            </p>
                            <Frame9 className="!relative" property1="default" vector="/img/vector-3-8.svg" />
                        </div>
                        <div
                            className="w-[94px] flex h-[26px] items-center justify-center gap-1.5 absolute top-[35px] left-[55px]">
                            <img className="relative w-[7.06px] h-[12.71px]" alt="Vector" src="/img/vector-2-2.svg" />
                            <div
                                className="relative w-fit [font-family:'Source_Code_Pro',Helvetica] font-semibold text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
                                Games
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
