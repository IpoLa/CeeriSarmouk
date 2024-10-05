import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./BentoGridItem";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Sonometre",
    description:
      "Un sonomètre est un instrument destiné à mesurer le niveau de pression acoustique, une grandeur physique liée au volume sonore. Il s'utilise dans les études de pollution sonore et d'acoustique environnementale pour quantifier le bruit et les nuisances sonores, principalement les bruits industriels et de transports routier, ferroviaire et aérien. En acoustique architecturale et en sonorisation, il sert à évaluer la répartition des niveaux sonores dans les locaux",
    header: (
      <img
        src="https://fr.trotec.com/images/sonometre-sl300-5bd2.jpg"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Détecteur de gaz QRAE II ",
    description:
      "Le QRAE II est un détecteur multigaz. Il permet de surveiller en continue l'exposition aux gaz tels que l'oxygène, le sulfure d'hydrogène, le monoxyde de carbone et les gaz combustibles pour les personnes travaillant dans des environnements dangereux.",
    header: (
      <img
        src="https://www.be-atex.com/sites/be-atex.com/www.be-atex.com/files/styles/410x410/public/images/produits/MeshGuard-Application-in-RAE-PowerPak-web.jpg?itok=5D2-SH7n"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <img
        src="https://fr.trotec.com/images/sonometre-sl300-5bd2.jpg"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Luxmètre",
    description: "Les Luxmètres modernes fonctionnent sur le principe d'une cellule C.C.D ou cellule photovoltaïque ; un circuit intégré reçoit une certaine quantité de lumière (les photons constituant le signal qui est l'énergie rayonnante) et la transforme en un signal électrique (signal analogique). Ce signal est visualisé par le mouvement d'une aiguille, l'allumage d'une diode, l'affichage d'un chiffre… Une photorésistance associée à un ohmmètre jouerait le même rôle",
    header: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfeAKbhfKnw5FRYIjTOz1ErFRIpSuNeZGsmZEvGT-nXuog46CIejP7nO_HiSZS-AeR3k&usqp=CAU"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sonomètre manuel",
    description:
      "Ce produit a été fabriqué dans une installation certifiée ISO 9001 et a été calibré au cours du processus de fabrication afin de répondre aux carac- téristiques de produit énoncées. Pour obtenir un certificat de calibration, veuillez communiquer avec le distributeur REED ou tout autre centre de service autorisé. Veuillez noter que des frais additionnels sont exigibles pour ce service",
    header: (
      <img
        src="https://professionnelle.sirv.com/mesure/img/p/3/5/3/8/sonometre-pce-432-sc-09.jpg?w=600&h=600&canvas.width=600&canvas.height=600"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <img
        src="https://fr.trotec.com/images/sonometre-sl300-5bd2.jpg"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: (
      <img
        src="https://fr.trotec.com/images/sonometre-sl300-5bd2.jpg"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
