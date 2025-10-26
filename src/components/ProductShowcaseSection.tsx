"use client"

import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiBook, FiVideo, FiFileText, FiPackage } from "react-icons/fi";
import { useTranslations } from 'next-intl';

const ProductShowcaseSection = () => {
  return (
    <>
      <SwapColumnFeatures />
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView, featureInView, setFeatureInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-[#003399] px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold text-gray-900">{featureInView.title}</p>
          <p className="text-gray-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-gray-900 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-gray-800 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-2">
        <p className="font-mono text-sm text-gray-200">
          <span className="text-green-300">~</span> Découvrez notre gamme de{" "}
          <span className="inline-block rounded bg-[#003399] px-1 font-semibold text-white">
            "{featureInView.title}"
          </span>{" "}
          de haute qualité avec droits de revente.
        </p>
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-gray-700">
        <featureInView.Icon />
      </span>
    </div>
  );
};

export default ProductShowcaseSection;

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "200+ Ebooks PLR Premium",
    title: "Ebooks et Guides",
    description:
      "Offrez à votre audience une lecture engageante et de qualité. Seulement des informations réelles et utiles. Des explications approfondies et directes sur les sujets que vos clients veulent consommer.",
    contentPosition: "r",
    Icon: FiBook,
  },
  {
    id: 2,
    callout: "200+ Vidéos et Audios PLR",
    title: "Cours Vidéo et Audio",
    description:
      "Cours directs, pratiques et explicatifs. Forme visuelle de contenu très demandée et parfaite pour ceux qui préfèrent écouter des podcasts et apprendre en déplacement.",
    contentPosition: "l",
    Icon: FiVideo,
  },
  {
    id: 3,
    callout: "1000+ Formats Courts PLR",
    title: "Ressources Actionnables",
    description:
      "Fournissez d'autres formats de contenu riches qui gagnent en popularité. Mini-cours, Cahiers d'exercices, Modèles Notion, Prompts IA, Modèles, Articles, Piles d'outils et plus encore.",
    contentPosition: "r",
    Icon: FiFileText,
  },
  {
    id: 4,
    callout: "Produits Numériques",
    title: "Packages Complets",
    description:
      "Des packages tout-en-un comprenant plusieurs formats de contenu pour maximiser votre offre. Ebooks, vidéos, templates et ressources combinés pour créer des produits à forte valeur ajoutée.",
    contentPosition: "l",
    Icon: FiPackage,
  },
];
