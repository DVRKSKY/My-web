import React, { useState, useEffect } from "react";
import bootstrap from "../assets/logos/boostrap.svg";
import css from "../assets/logos/css.svg";
import dart from "../assets/logos/dart.svg";
import express from "../assets/logos/express.svg";
import figma from "../assets/logos/figma.svg";
import git from "../assets/logos/git.svg";
import html from "../assets/logos/html.svg";
import javascript from "../assets/logos/javascript.svg";
import mysql from "../assets/logos/mysql.svg";
import node from "../assets/logos/node.svg";
import php from "../assets/logos/php.svg";
import python from "../assets/logos/python.svg";
import react from "../assets/logos/react.svg";
import redux from "../assets/logos/redux.svg";
import sass from "../assets/logos/sass.svg";
import pug from "../assets/logos/pug.svg";
import tailwind from "../assets/logos/tailwind.svg";
import typescript from "../assets/logos/typescript.svg";
import vue from "../assets/logos/vue.svg";

export default function CarrouselAutoplay() {
  const data = [
    { name: "Bootstrap", icon: bootstrap },
    { name: "CSS", icon: css },
    { name: "Dart", icon: dart },
    { name: "Express", icon: express },
    { name: "Figma", icon: figma },
    { name: "Git", icon: git },
    { name: "HTML", icon: html },
    { name: "Javascript", icon: javascript },
    { name: "MySQL", icon: mysql },
    { name: "Node", icon: node },
    { name: "PHP", icon: php },
    { name: "Python", icon: python },
    { name: "React", icon: react },
    { name: "Redux", icon: redux },
    { name: "Sass", icon: sass },
    { name: "Pug", icon: pug },
    { name: "Tailwind", icon: tailwind },
    { name: "Typescript", icon: typescript },
    { name: "Vue", icon: vue },
  ];

  const [offset, setOffset] = useState(0);
  const duplicatedData = [...data, ...data];
  const itemWidth = 180;
  useEffect(() => {
    const moveBanner = setInterval(() => {
      if (offset <= -itemWidth * data.length) {
        setOffset(0);
      } else {
        setOffset((prev) => prev - 1);
      }
    }, 30);
    return () => clearInterval(moveBanner);
  }, [offset]);

  return (
    <div className="relative w-full overflow-hidden py-20">
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {duplicatedData.map((item, index) => (
          <div
            key={index}
            className="mx-8 text-center select-none"
            style={{ minWidth: itemWidth }}
          >
            <img
              className="w-24 h-24 mx-auto mb-4"
              src={item.icon}
              alt={`${item.name} Logo`}
            />
            <span className="text-xl text-backgroundDark font-light">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
