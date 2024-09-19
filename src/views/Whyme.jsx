import React from "react";
import { TabOptions, Title } from "../components";
export default function Whyme() {
  return (
    <div
      id="why-me"
      className="w-screen h-auto relative flex flex-col bg-backgroundLight justify-center items-center md:px-24 px-6 pt-28"
    >
      <Title type="title" textPrimary="Why" textSecondary="me?" where="other" />
      <TabOptions />
    </div>
  );
}
