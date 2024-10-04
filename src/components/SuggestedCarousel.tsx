"use client";

import React, { MouseEvent as ReactMouseEvent, useRef, useState } from "react"; // Add React import

import { motion, useMotionValue, useSpring, type PanInfo } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

import { cn } from "../lib/utils.ts";
import { Link } from "react-router-dom";

const START_INDEX = 1;
const DRAG_THRESHOLD = 150;
const FALLBACK_WIDTH = 509;

const CURSOR_SIZE = 80;

const articles = [
  {
    title:
      "Building a fully customisable carousel slider with swipe gestures and navigation using Framer Motion",
    url: "https://medium.com/@jeyprox/building-a-fully-customisable-carousel-slider-with-swipe-gestures-navigation-and-custom-cursor-4e986ccbd08f",
  },
  {
    title:
      "Building a customisable Input component with NextJS, ReactHookForm, TailwindCSS and TypeScript",
    url: "https://medium.com/@jeyprox/building-a-fully-customisable-input-component-with-nextjs-reacthookfrom-tailwindcss-and-ts-58874a2e3450",
  },
  {
    title: "Handling Forms in NextJS with busboy, ReactHookForm and TypeScript",
    url: "https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3",
  },
];

export default function SuggestedCarousel() {
  const containerRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < articles.length - 1;
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const [isDragging, setIsDragging] = useState(false);
  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    setIsDragging(false);
    containerRef.current?.removeAttribute("data-dragging");

    animatedX.stop();

    const currentOffset = offsetX.get();

    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;

    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;
      const itemOffset = item.offsetWidth;

      const prevItemWidth =
        itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && dragOffset > offsetWidth + itemOffset && i > 1) ||
        (dragOffset < 0 &&
          dragOffset < offsetWidth + -itemOffset &&
          i < itemsRef.current.length - 2)
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
      } else {
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
      }
      break;
    }
  }

  function scrollPrev() {
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current
      .at(activeSlide - 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + nextWidth);

    setActiveSlide((prev) => prev - 1);
  }
  function scrollNext() {
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current
      .at(activeSlide + 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - nextWidth);

    setActiveSlide((prev) => prev + 1);
  }

  const [hoverType, setHoverType] = useState<"prev" | "next" | "click" | null>(
    null
  );
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const animatedHoverX = useSpring(mouseX, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });
  const animatedHoverY = useSpring(mouseY, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });

  function navButtonHover({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    const parent = currentTarget.offsetParent;
    if (!parent) return;
    const { left: parentLeft, top: parentTop } = parent.getBoundingClientRect();

    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetFromCenterX = clientX - centerX;
    const offsetFromCenterY = clientY - centerY;

    mouseX.set(left - parentLeft + offsetFromCenterX / 4);
    mouseY.set(top - parentTop + offsetFromCenterY / 4);
  }

  function disableDragClick(e: ReactMouseEvent<HTMLAnchorElement>) {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <>
      <div className="text-center">
        <div className="flex justify-center gap-4">
          <Link
            className="text-sm underline underline-offset-2 hover:text-lime-300"
            to={"https://medium.com/@jeyprox"}
            target="_blank"
            rel="noopener noreferrer"
          >
            to the article
          </Link>
          <Link
            className="text-sm underline underline-offset-2 hover:text-lime-300"
            to={"https://github.com/jeyprox/framer-carousel"}
            target="_blank"
            rel="noopener noreferrer"
          >
            to the repo
          </Link>
        </div>
        <h1 className="mt-2 text-6xl font-bold uppercase">
          Framer Motion Carousel
        </h1>
        <p className="text-sm text-gray-400">
          only really works on desktop for now
        </p>
      </div>
      <div className="group container mx-6">
        <motion.div
          className={cn(
            "pointer-events-none absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
            x: animatedHoverX,
            y: animatedHoverY,
          }}
        >
          <motion.div
            layout
            className={cn(
              "grid h-full place-items-center rounded-full bg-lime-300",
              hoverType === "click" && "absolute inset-7 h-auto"
            )}
          >
            <motion.span
              layout="position"
              className={cn(
                "w-full select-none text-center font-medium uppercase text-gray-900",
                (hoverType === "prev" || hoverType === "next") &&
                  "absolute inset-x-0 top-2",
                hoverType === "click" &&
                  "absolute top-full mt-0.5 w-auto text-sm font-bold text-lime-300"
              )}
            >
              {hoverType ?? "drag"}
            </motion.span>
          </motion.div>
        </motion.div>
        <div className="flex items-center justify-between px-6">
          <motion.button
            onClick={scrollPrev}
            onMouseMove={(e) => {
              setHoverType("prev");
              navButtonHover(e);
            }}
            onMouseLeave={() => setHoverType(null)}
            className={cn(
              "hidden lg:flex",
              canScrollPrev
                ? "cursor-pointer text-lime-300"
                : "cursor-not-allowed text-gray-400"
            )}
          >
            <MoveLeft size={64} />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            onMouseMove={(e) => {
              setHoverType("next");
              navButtonHover(e);
            }}
            onMouseLeave={() => setHoverType(null)}
            className={cn(
              "hidden lg:flex",
              canScrollNext
                ? "cursor-pointer text-lime-300"
                : "cursor-not-allowed text-gray-400"
            )}
          >
            <MoveRight size={64} />
          </motion.button>
        </div>
        <motion.ul
          ref={containerRef}
          className="flex snap-x snap-mandatory overflow-x-scroll"
          style={{
            x: animatedX,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onPointerUp={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragSnap}
          data-dragging={isDragging ? "" : undefined}
        >
          {articles.map((article, index) => (
            <motion.li
              key={article.url}
              // ref={(el) => (itemsRef.current[index] = el)}
              className="relative flex h-[320px] snap-center shrink-0 flex-col justify-between rounded-lg bg-gray-800 p-4 text-white"
            >
              <Link
                to={article.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseDown={(e) => disableDragClick(e)}
              >
                <h2 className="text-lg font-semibold">{article.title}</h2>
              </Link>
              <Link
                to={article.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseDown={(e) => disableDragClick(e)}
              >
                <span className="mt-2 flex items-center justify-center rounded-lg border-2 border-lime-300 py-2 text-sm font-medium text-lime-300 transition-colors duration-200 hover:bg-lime-300 hover:text-gray-900">
                  Read
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}
