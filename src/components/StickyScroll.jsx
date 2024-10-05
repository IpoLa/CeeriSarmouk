"use client";
import React from "react";
// import Image from "next/image";
import { StickyScroll } from "./StickyScrollReveal";
// import Image from "next/image";
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../assets/pexels-pixabay-271816.jpg";

const content = [
  {
    title: "C.E.E.R.I Cabinet d’Etudes Environnementaux et Risques Industriels",
    description:
      "Le CEERI a été créé en 2000 autour de l’idée de bâtir un bureau orienté vers les études environnementales. Dans un monde plein de mutation, le bureau n’a cessé d’accroitre son rayon d’activité pour s’inscrire dans une dynamique d’économie durable étendant ainsi son champ aux prestations d’études de risques industriels, dans tous leurs aspects, et aux diagnostics de mise en conformité réglementaire d’installations. 2020 est une année charnière, car elle voit le CEERI atteindre sa maturité en se transformant en SARL et en acquérant, dans une démarche certes volontaire mais affirmée, la certification ISO 9001:2015.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://ceerisarmouk.com/wp-content/uploads/2023/02/313782920_828974781640922_6071034759232702015_n.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Indentification",
    description:
      "Le CEERI se veut d’abord une entreprise citoyenne. C’est une idée édifiée autour d’une équipe pluridisciplinaire conduite sous l’égide de son fondateur : Monsieur SARMOUK Toufik. Dès son entrée en activité, et fidèle à sa vocation primaire, le CEERI affiche clairement ses intentions : être à l’avant-garde de la protection de l’environnement en s’attaquant aux projets à forte application environnementale tels que les études d’impact, d’audit, de dangers, de risque industriel et dernièrement les diagnostics de mise en conformité réglementaires des installations. La pluridisciplinarité de ses experts étant certifiés, couvrant divers domaines, a cimenté le CEERI en tant que pionnier dans son domaine d’intervention, en utilisant les outils les plus avancées en la matière.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://ceerisarmouk.com/wp-content/uploads/2019/11/7-e1574692302566.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "NOS MISSIONS",
    description:
      "L’objectif principal du CEERI demeure de consolider sa position en tant que leader national dans son domaine, et ce, en s’inscrivant dans une démarche d’amélioration continue en faisant recours, notamment, à la formation et aux stages de perfectionnement à l’intention de ses experts.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://ceerisarmouk.com/wp-content/uploads/2019/11/12.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-0">
      <StickyScroll content={content} />
    </div>
  );
}
