"use client";

import Nav from "@/components/Nav";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations("Index");

  return (
    <>
      <Nav />
      <div
        className="mt-28 grid place-items-center w-full mx-auto mb-10 text-lg l
      eading-relaxed max-w-4xl text-center font-mulish"
      >
        <h1 className="text-5xl my-5 font-extrabold">{t("heading")}</h1>
        <p className="text-slate-700 my-5">{t("description1")}</p>
        <div className="my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7teyu7nGE5k?si=7WLIZtVwDOHeDZPg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <h3 className="text-left my-2 px-4 italic font-semibold capitalize">
            Latest tutorial of Solve it out
          </h3>
        </div>
        <p className="text-slate-700 my-5">{t("description2")}</p>
      </div>
    </>
  );
};

export default About;
