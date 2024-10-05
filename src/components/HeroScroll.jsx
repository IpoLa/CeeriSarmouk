"use client";
import React, { useEffect, useRef, useState } from "react";
import { ContainerScroll } from "./HeroScrollContainer";

export function HeroScrollDemo() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          setInView(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.1, // Adjust threshold to play video when 10% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col overflow-hidden" ref={sectionRef}>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
                Choix de premier ordre <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Notre storie
              </span>
            </h1>
          </>
        }
      >
        <video
          ref={videoRef}
          src={`${process.env.PUBLIC_URL}/video.mp4`}
          title="Video"
          loop
          muted
          draggable={false}
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
        ></video>
      </ContainerScroll>
    </div>
  );
}
