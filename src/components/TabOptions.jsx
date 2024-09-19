import React, { useEffect, useState } from "react";
import {
  Code,
  Mediaplayer,
  ResponsiveCard,
  CreativeDesign,
  VersatileDesign,
  CoopAi,
  IconGood,
  IconResponsiveDesing,
  IconCreativity,
  IconVersatile,
  IconIa,
  IconCode,
  IconGoodActive,
  IconResponsiveActive,
  IconCreativityActive,
  IconVersatileActive,
  IconIaActive,
} from "../components/index";
import {
  mediaplayerCode,
  responsiveDesign,
  creativeDesign,
  versatileDesign,
  coopAi,
} from "./Segments/segments";

export default function TabOptions() {
  const initialTab = localStorage.getItem("tabActive")
    ? Number(localStorage.getItem("tabActive"))
    : 0;
  const [tabActive, setTabActive] = useState(initialTab);
  const [tabContent, setTabContent] = useState({});

  const reasons = [
    {
      title: "Creativity desing",
      icon: <IconCreativity />,
      iconActive: <IconCreativityActive />,
      elemento: <CreativeDesign />,
      code: creativeDesign,
    },
    {
      title: "Responsive desing",
      icon: <IconResponsiveDesing />,
      iconActive: <IconResponsiveActive />,
      elemento: <ResponsiveCard />,
      code: responsiveDesign,
    },
    {
      title: "Versatile designer",
      icon: <IconVersatile />,
      iconActive: <IconVersatileActive />,
      elemento: <VersatileDesign />,
      code: versatileDesign,
    },
    {
      title: "Good practices",
      icon: <IconGood />,
      iconActive: <IconGoodActive />,
      elemento: <Mediaplayer />,
      code: mediaplayerCode,
    },
    {
      title: "Growth and Innovation",
      icon: <IconIa />,
      iconActive: <IconIaActive />,
      elemento: <CoopAi />,
      code: coopAi,
    },
  ];
  const tabHandler = (i) => {
    setTabActive(i);
    setTabContent(reasons?.[i]);
    localStorage.setItem("tabActive", i);
  };
  useEffect(() => {
    setTabContent(reasons[tabActive]);
  }, [tabActive]);
  useEffect(() => {
    setTabContent(reasons?.[initialTab]);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="md:pt-20  select-none pt-10 flex md:flex-row flex-col md:items-center items-start md:px-1 px-6 md:justify-center justify-between">
        {reasons.map((reason, index) => (
          <div
            key={index}
            onClick={() => tabHandler(index)}
            className={`flex ease-in duration-200 md:mx-4 mx-1 md:my-1 my-2 flex-row justify-center items-center ${
              index === tabActive ? "text-primary" : "text-tertiary"
            }  text-lg font-light cursor-pointer`}
          >
            {index === tabActive ? reason.iconActive : reason.icon}
            <span className="ml-4 md:w-28 w-auto  leading-6">
              {reason.title}
            </span>
          </div>
        ))}
      </div>

      <div className="md:px-24 px-6 w-screen whiteboard h-[600px]  md:mt-20 mt-10   relative flex md:flex-row flex-col justify-center items-center bottom-0">
        <div className="md:w-1/2 w-full flex justify-start">
          {tabContent.elemento}
        </div>
      </div>
    </div>
  );
}
