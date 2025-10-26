"use client"

import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState, useMemo } from "react";
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
  const t = useTranslations('productCategories');

  const features = useMemo<FeatureType[]>(() => [
    {
      id: 1,
      callout: t('ebooksBadge'),
      title: t('ebooksTitle'),
      description: t('ebooksDesc'),
      contentPosition: "r",
      Icon: FiBook,
      images: [
        "https://entrepedia-products.com/product-mockups/The%20Ad%20Funnel%20Blueprint%20Strategies%20-%20Ebook1.jpg",
        "https://entrepedia-products.com/product-mockups/Keep%20Them%20Coming%20Back%20-%20Book1.jpg"
      ]
    },
    {
      id: 2,
      callout: t('videoBadge'),
      title: t('videoTitle'),
      description: t('videoDesc'),
      contentPosition: "l",
      Icon: FiVideo,
      images: [
        "https://entrepedia-products.com/product-mockups/The%206-Day%20YouTube%20Accelerator%20-%20Mini-Course1.jpg"
      ]
    },
    {
      id: 3,
      callout: t('resourcesBadge'),
      title: t('resourcesTitle'),
      description: t('resourcesDesc'),
      contentPosition: "r",
      Icon: FiFileText,
      images: [
        "https://entrepedia-products.com/product-mockups/Headline%20Framework%20-%20Guide1.jpg",
        "https://entrepedia-products.com/product-mockups/The%20Multi-Bucket%20Savings%20System%20-%20Guide1.jpg"
      ]
    },
    {
      id: 4,
      callout: t('packagesBadge'),
      title: t('packagesTitle'),
      description: t('packagesDesc'),
      contentPosition: "l",
      Icon: FiPackage,
      images: [
        "https://entrepedia-products.com/product-mockups/GetResponse%20Growth%20System1.jpg",
        "https://entrepedia-products.com/product-mockups/Interview%20Success%20Blueprint%20-%20Book1.jpg"
      ]
    },
  ], [t]);

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
  const t = useTranslations('productCategories');

  return (
    <div className="relative h-96 w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl overflow-hidden">
      <div className="flex w-full gap-1.5 bg-gray-800 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Images Display */}
      {featureInView.images && featureInView.images.length > 0 && (
        <div className="h-full p-6 flex items-center justify-center gap-4">
          {featureInView.images.map((image, index) => (
            <div
              key={index}
              className="relative flex-1 h-full rounded-lg overflow-hidden shadow-lg bg-white p-2"
            >
              <img
                src={image}
                alt={`${featureInView.title} ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      )}
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
  images?: string[];
};
