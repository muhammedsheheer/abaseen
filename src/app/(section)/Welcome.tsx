"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";

const Welcome = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });

    const splitType = document.querySelectorAll(".head-welcome");
    splitType.forEach((char) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });
    gsap.to(".about-arrow", {
      scrollTrigger: {
        trigger: ".about-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 1,
    });
  }, []);
  const text = "About us";
  return (
    <section
      id="welcome"
      className="relative flex w-full items-center justify-center bg-transparent"
      // style={{
      //   backgroundImage: "url('/images/home/about/mask.png')",
      //   backgroundPosition: "center center",
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex">
        <div className="z-30 ml-[108px] mr-[108px] h-full w-full xl:border-x-[0.25px] xl:border-x-primary"></div>
      </div>
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <p className="welcome-one font-stone text-xl font-[200] text-primary md:-ml-[50px] md:text-3xl">
                Our Story
              </p>
              <p className="styled_section_head non-italic flex items-center justify-center gap-3 text-center uppercase text-primary">
                <Image
                  src="/images/left.png"
                  alt="left"
                  width={44}
                  height={12}
                  className="about-arrow w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                />
                <span className="head-welcome">
                  {text.split("").map((char, index) => (
                    <span key={index} className="key head-welcome">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <Image
                  src="/images/right.png"
                  alt="right"
                  width={44}
                  height={12}
                  className="about-arrow h-fit w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                />
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
            <div className="flex flex-col items-center gap-5">
              <p className="welcome-two w-full text-center text-[#AAA9A9] md:-ml-[50px] md:w-[530px]">
                At Abaseen, we bring the rich flavors of tradition to your
                table. From time-honored recipes to a modern dining experience,
                every dish is crafted with passion and authenticity. Whether
                you&apos;re dining in or ordering out, enjoy a warm, welcoming
                atmosphere and a true taste of culture — right here in the heart
                of Manchester. 🍴
              </p>
            </div>
          </div>
          <div className="grid w-full max-w-[1200px] grid-cols-1 items-center justify-center gap-9 md:grid-cols-3 md:justify-between">
            <div className="m-auto flex w-[90%] items-center justify-center md:m-0 md:w-full">
              <Image
                src="/images/home/about1/1.jpg"
                alt="right"
                width={407}
                height={570}
                className="about-arrow w-full object-cover md:h-[507px] md:w-fit"
                style={{
                  transform: "scale(0.5)",
                }}
              />
            </div>
            <div className="m-auto flex w-[90%] items-center justify-center md:m-0 md:w-full">
              <Image
                src="/images/home/about1/2.jpg"
                alt="right"
                width={407}
                height={570}
                className="about-arrow w-full object-cover md:h-[507px] md:w-fit"
              />
            </div>
            <div className="m-auto flex w-[90%] items-center justify-center md:m-0 md:w-full">
              <Image
                src="/images/home/about1/3.jpg"
                alt="right"
                width={407}
                height={570}
                className="about-arrow w-full object-cover md:h-[507px] md:w-fit"
                style={{
                  transform: "scale(0.5)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
