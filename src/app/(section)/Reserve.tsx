// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const Reserve = ({}) => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const mm = gsap.matchMedia();
//     mm.add("(max-width:500px)", () => {
//       gsap.to(".reserve-one", {
//         scrollTrigger: {
//           trigger: ".reserve-one",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 0,
//         duration: 0.8,
//       });

//       gsap.to(".reserve-two", {
//         scrollTrigger: {
//           trigger: ".reserve-two",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 0,
//         duration: 0.8,
//       });
//     });

//     mm.add("(min-width:501px)", () => {
//       gsap.to(".reserve-one", {
//         scrollTrigger: {
//           trigger: ".reserve-one",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 30,
//         duration: 0.8,
//       });
//       gsap.to(".reserve-two", {
//         scrollTrigger: {
//           trigger: ".reserve-two",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 30,
//         duration: 0.8,
//       });
//     });
//     gsap.to(".reserve-arrow", {
//       scrollTrigger: {
//         trigger: ".reserve-arrow",
//         toggleActions: "restart none none none",
//         // start: "top 80%", // When the top of the .title enters 80% of the viewport
//         // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//         // scrub: true
//       },
//       scale: 1,
//       duration: 0.8,
//     });

//     gsap.to(".reserve-container", {
//       scrollTrigger: {
//         trigger: ".reserve-container",
//         toggleActions: "restart none none none",
//         // start: "top 80%", // When the top of the .title enters 80% of the viewport
//         // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//         // scrub: true
//       },
//       scale: 1,
//       opacity: 1,
//       duration: 0.8,
//     });

//     const splitType = document.querySelectorAll(".head-reserve");
//     splitType.forEach((char) => {
//       if (char instanceof HTMLElement) {
//         const text = new SplitType(char, { types: "chars" });
//         gsap.from(text.chars, {
//           scrollTrigger: {
//             trigger: char,
//             start: "top 80%",
//             end: "top 20%",
//             scrub: true,
//             markers: false,
//           },
//           opacity: 0.2,
//           stagger: 0.2,
//         });
//       }
//     });
//   }, []);
//   return (
//     <section
//       id="reserve"
//       className="relative flex w-full items-center justify-center md:h-screen"
//     >
//       {/* <div className="lines">
//                 <div className="line"></div>
//                 <div className="line"></div>
//                 <div className="line"></div>
//                 <div className="line"></div>
//             </div> */}
//       <div
//         className="absolute bottom-12 left-0 h-[28px] w-full"
//         style={{
//           backgroundImage: "url('/images/line.png')",
//           backgroundRepeat: "repeat",
//         }}
//       />
//       <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden px-3 py-12 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
//         <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-start gap-5 md:flex-row lg:items-center lg:gap-9">
//           {/* <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center items-center">
//                         <Image
//                             src='/images/home/DSC03448.jpg'
//                             width={6024}
//                             height={4024}
//                             alt="reserve"
//                             className="max-w-[603] max-h-[581]"
//                         />
//                     </div> */}
//           <div
//             className="reserve-container flex w-full flex-col items-center justify-center gap-7 md:w-1/2"
//             style={{
//               transform: "scale(1.3)",
//               opacity: 0,
//             }}
//           >
//             <p className="reserve-one font-stone text-xl font-[200] text-primary md:-ml-[50px] md:text-3xl">
//               Reservation
//             </p>
//             <p className="styled_section_head mt-[-28px] flex items-center justify-center gap-3 text-center uppercase text-primary">
//               <Image
//                 src="/images/left.png"
//                 alt="left"
//                 width={44}
//                 height={12}
//                 className="reserve-arrow w-fit"
//                 style={{
//                   transform: "scale(0.5)",
//                 }}
//               />
//               <span className="head-reserve">
//                 Reserve
//                 <br />
//                 Your Table
//               </span>
//               <Image
//                 src="/images/right.png"
//                 alt="right"
//                 width={44}
//                 height={12}
//                 className="reserve-arrow h-fit w-fit"
//                 style={{
//                   transform: "scale(0.5)",
//                 }}
//               />
//             </p>
//             <p className="reserve-two w-full text-center text-[#9c9999] md:-ml-[50px] md:max-w-[400px]">
//               Reserve your table at Abaseen for an unforgettable culinary
//               experience. Make sure you don’t miss out on our authentic dishes
//               and inviting atmosphere. Book now and let Abaseen turn your visit
//               into something truly special!
//             </p>
//             <Link href="/table-booking">
//               <Button
//                 className="hero-button flex items-center justify-center gap-3 px-10 py-7"
//                 variant="image"
//               >
//                 {" "}
//                 Book Table
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="absolute right-0 top-0 flex h-full w-full justify-center overflow-hidden">
//         <video
//           className="min-h-full min-w-full object-cover"
//           style={{ objectPosition: "center" }}
//           src="/videos/ReserveTable.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           poster="/images/home/reservebg.png"
//         ></video>
//       </div>
//     </section>
//   );
// };

// export default Reserve;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/about1/bg.jpg')" }}
    >
      <div className="absolute bottom-0 left-4 right-4 md:left-[30%] md:right-[30%]">
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-t-[300px] bg-[#070D0F] px-8 py-16 md:gap-8 md:px-20 md:py-24 2xl:py-32">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <span className="font-stone text-2xl font-[400] tracking-[0.76px] text-[#C9AB81]">
                Reservation{" "}
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 md:gap-5">
              <Image
                src={"/images/left.png"}
                width={281}
                height={74}
                alt="image"
                className="w-10"
              />
              <h6 className="font-open_sans text-center text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
                Reserve <br />
                Your Table
              </h6>
              <Image
                src={"/images/right.png"}
                width={281}
                height={74}
                alt="image"
                className="w-10"
              />
            </div>
          </div>
          <div>
            <p className="font-lora w-full max-w-[500px] text-center text-sm font-[400] lowercase leading-[150%] text-[#9C9E9F] md:text-base">
              Reserve your table at Abaseen for an unforgettable culinary
              experience. Make sure you don’t miss out on our authentic dishes
              and inviting atmosphere. Book now and let Abaseen turn your visit
              into something truly special!
            </p>
          </div>
          <div className="mt-5">
            <Link href={"/table-booking"}>
              <Button
                className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
                variant="image"
              >
                Book Now{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
