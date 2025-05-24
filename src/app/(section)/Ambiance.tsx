"use client";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Ambiance = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".ambiance-item", {
      scrollTrigger: {
        trigger: ".ambiance-item",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
    });
  }, []);
  return (
    <section className="relative flex h-fit w-full items-center justify-center overflow-y-hidden px-4 py-24 md:h-[100vh]">
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col md:flex-row">
        <div className="h-full w-full md:w-1/2">
          <Image
            src="/images/home/ambiance/1.png"
            width={960}
            height={951}
            alt="1"
          />
        </div>
        <div className="h-full w-full md:w-1/2">
          <Image
            src="/images/home/ambiance/2.png"
            width={960}
            height={951}
            alt="2"
          />
        </div>
      </div>
      <div
        className="ambiance-item relative z-20 flex flex-col items-center justify-center gap-8 bg-[#0b1315] px-4 py-12 md:w-[700px]"
        style={{
          transform: "scale(1.3)",
          opacity: 0,
        }}
      >
        <div
          className="absolute left-0 top-0 h-[28px] w-full"
          style={{
            backgroundImage: "url('/images/line.png')",
            backgroundRepeat: "repeat",
          }}
        />
        <p className="reserve-one font-stone text-xl font-[200] text-primary md:-ml-[50px] md:text-3xl">
          Our Ambiance
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
            A PLACE
            <br />
            TO UNWIND
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
        <p className="reserve-two w-full text-center text-[#AAA9A9] md:-ml-[50px] md:max-w-[400px]">
          Reserve your table at Abaseen for an authentic and memorable dining
          experience. Secure your spot to indulge in our rich, flavorful cuisine
          and warm, welcoming atmosphere. Book now and let Abaseen make your
          visit truly special!
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
        <div
          className="absolute bottom-0 left-0 h-[28px] w-full"
          style={{
            backgroundImage: "url('/images/line.png')",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
    </section>
  );
};

export default Ambiance;
