// components/SwipeCarousel.tsx
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface SwipeCarouselProps {
  images: string[];
  autoDelay?: number;
  dragBuffer?: number;
}

const ONE_SECOND = 1000;
const DEFAULT_AUTO_DELAY = ONE_SECOND * 10;
const DEFAULT_DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel: React.FC<SwipeCarouselProps> = ({
  images,
  dragBuffer = DEFAULT_DRAG_BUFFER,
  autoDelay = DEFAULT_AUTO_DELAY,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === images.length - 1 ? 0 : pv + 1));
      }
    }, autoDelay);

    return () => clearInterval(intervalRef);
  }, [autoDelay, dragX, images.length]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -dragBuffer && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= dragBuffer && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative bg-white overflow-hidden dark:bg-black py-4">
      <motion.div
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        className="flex h-[50vh] z-0 cursor-grab items-center active:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        <Images images={images} imgIndex={imgIndex} />
      </motion.div>

      <Dots images={images} imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

interface ImagesProps {
  images: string[];
  imgIndex: number;
}

const Images: React.FC<ImagesProps> = ({ images, imgIndex }) => {
  return (
    <>
      {images.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          animate={{
            scale: imgIndex === idx ? 0.95 : 0.85,
          }}
          className="aspect-video z-0 w-full shrink-0 rounded-xl bg-neutral-200 dark:bg-neutral-800 object-cover h-full"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
          transition={SPRING_OPTIONS}
        />
      ))}
    </>
  );
};

interface DotsProps {
  images: string[];
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Dots: React.FC<DotsProps> = ({ images, imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 z-10 flex w-full justify-center gap-2">
      {images.map((_, idx) => (
        <button
          key={idx}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex
              ? "dark:bg-neutral-50 bg-neutral-900"
              : "bg-neutral-500"
          }`}
          onClick={() => setImgIndex(idx)}
        />
      ))}
    </div>
  );
};

const GradientEdges: React.FC = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r dark:from-neutral-950/50 dark:to-neutral-950/0 from-gray-300/50 to-gray-300/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l dark:from-neutral-950/50 dark:to-neutral-950/0 from-gray-300/50 to-gray-300/0" />
    </>
  );
};

export default SwipeCarousel;
