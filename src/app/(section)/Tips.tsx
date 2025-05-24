"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Tips = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".reserve-one", {
        scrollTrigger: {
          trigger: ".reserve-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".reserve-two", {
        scrollTrigger: {
          trigger: ".reserve-two",
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
      gsap.to(".reserve-one", {
        scrollTrigger: {
          trigger: ".reserve-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".reserve-two", {
        scrollTrigger: {
          trigger: ".reserve-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });
    gsap.to(".reserve-arrow", {
      scrollTrigger: {
        trigger: ".reserve-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8,
    });

    gsap.to(".tips-container", {
      scrollTrigger: {
        trigger: ".tips-container",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
    });

    const splitType = document.querySelectorAll(".head-reserve");
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
  }, []);

  const text = "OUR TIPS";
  return (
    <section
      id="reserve"
      className="relative flex w-full items-center justify-center md:h-fit"
      style={{
        backgroundImage: "url('/images/home/tips/bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex">
        <div className="z-30 ml-[108px] mr-[108px] h-full w-full xl:border-x-[0.25px] xl:border-x-primary"></div>
      </div>
      {/* <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div> */}
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden px-3 py-12 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-start gap-5 md:flex-row lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2 md:flex-row">
            <Image
              src="/images/home/tips/1.png"
              width={427}
              height={590}
              alt="tips"
              className="tips-container h-96 object-contain md:max-w-[300px] lg:h-auto"
              style={{
                transform: "scale(1.3)",
                opacity: 0,
              }}
            />
            <Image
              src="/images/home/tips/2.png"
              width={427}
              height={590}
              alt="tips"
              className="tips-container h-96 object-contain md:mt-[100px] md:max-w-[300px] lg:h-auto"
              style={{
                transform: "scale(1.3)",
                opacity: 0,
              }}
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-7 md:w-1/2">
            <p className="reserve-one font-stone text-xl font-[200] text-primary md:-ml-[50px] md:text-3xl">
              Our food philosophy
            </p>
            <p className="styled_section_head mt-[-28px] flex items-center justify-center gap-3 text-center uppercase text-primary">
              <Image
                src="/images/left.png"
                alt="left"
                width={44}
                height={12}
                className="reserve-arrow w-fit"
                style={{
                  transform: "scale(0.5)",
                }}
              />
              <span className="head-reserve">
                {text.split("").map((char, index) => (
                  <span key={index} className="key">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <Image
                src="/images/right.png"
                alt="right"
                width={44}
                height={12}
                className="reserve-arrow h-fit w-fit"
                style={{
                  transform: "scale(0.5)",
                }}
              />
            </p>
            <p className="reserve-two w-full text-center text-[#9c9999] md:-ml-[50px] md:max-w-[400px]">
              Reserve your table at Abaseen for an unforgettable dining
              experience. Secure your place to savour our authentic cuisine and
              warm, welcoming atmosphere. Book now and let Abaseen make your
              visit truly memorable!
            </p>
            <Link href="/table-booking">
              <Button
                className="hero-button flex items-center justify-center gap-3 px-10 py-7"
                variant="image"
              >
                {" "}
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
