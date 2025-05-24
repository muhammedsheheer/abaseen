"use client";
import { Icons } from "@/components/Icon";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  console.log(reviews, "==review");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".review-one", {
        scrollTrigger: {
          trigger: ".review-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        opacity: 1,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".review-one", {
        scrollTrigger: {
          trigger: ".review-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });

    gsap.to(".review-arrow", {
      scrollTrigger: {
        trigger: ".review-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8,
    });

    const splitType = document.querySelectorAll(".head-review");
    splitType.forEach((char) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        console.debug(text);

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.4,
        });
      }
    });
  }, []);

  // const text = "our clients say";
  return (
    <section className="relative flex h-full w-full justify-center bg-transparent pb-8 md:pb-16">
      <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex">
        <div className="z-30 ml-[108px] mr-[108px] h-full w-full xl:border-x-[0.25px] xl:border-x-[#FEC67961]"></div>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 pb-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <p className="review-one font-stone text-xl font-[200] text-primary md:-ml-[50px] md:text-3xl">
            Testimonial
          </p>
          <p className="styled_section_head flex items-center justify-center gap-3 text-center uppercase tracking-[5] text-primary">
            <Image
              src="/images/left.png"
              alt="left"
              width={44}
              height={12}
              className="review-arrow w-fit"
              style={{
                transform: "scale(0.5)",
              }}
            />

            <span className="head-review md:hidden">
              Our <br /> Clients <br /> say
            </span>
            <span className="head-review hidden md:block">
              Our Clients <br /> say
            </span>
            <Image
              src="/images/right.png"
              alt="right"
              width={44}
              height={12}
              className="review-arrow h-fit w-fit"
              style={{
                transform: "scale(0.5)",
              }}
            />
          </p>
        </div>
        {/* <div className="flex w-full items-center justify-center p-4">
          <Carousel className="w-full sm:w-[84%] xl:w-[1100px] 2xl:w-[1704px]">
            <CarouselContent className="">
              {reviews?.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center 2xl:basis-1/2"
                >
                  <div className="flex w-full flex-col items-center gap-2 px-3">
                    <div className="relative flex w-full flex-col items-center justify-center gap-3 px-4 py-4 md:mb-8 md:ml-4 md:h-[300px] md:w-[564px] xl:px-8 2xl:h-[395px] 2xl:w-[736px]">
                      <div
                        className="absolute left-0 top-0 z-10 hidden h-full w-full md:flex"
                        style={{
                          backgroundImage: "url('/images/review.svg')",
                          backgroundSize: "100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                      <div className="z-20 flex w-full justify-center md:mt-[-50px]">
                        <Icons.star key={index} className="text-primary" />
                        <Icons.star key={index} className="text-primary" />
                        <Icons.star key={index} className="text-primary" />
                        <Icons.star key={index} className="text-primary" />
                        <Icons.star key={index} className="text-primary" />
                      </div>
                      <div className="z-20">
                        <p className="line-clamp-5 text-center font-poppins text-[#bbb4aa]">
                          {review.text.text}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-2 md:pl-8">
                      <Image
                        src={
                          review.authorAttribution.photoUri ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.authorAttribution.displayName}
                      />
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-inter text-[17.22px] font-bold uppercase leading-[28.88px] tracking-[4.37px] text-primary">
                          {review.authorAttribution.displayName}
                        </p>
                        <span className="text-[12px] capitalize leading-[18px] tracking-[8%] text-[#9C9995]">
                          {review.authorAttribution.displayName}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="z-40 hidden h-20 w-20 bg-[#0e1719] text-primary shadow-2xl outline-none md:flex"
              variant="default"
            />
            <CarouselNext
              className="z-40 hidden h-20 w-20 bg-[#0e1719] text-primary shadow-2xl outline-none md:flex"
              variant="default"
            />
            <div className="flex items-center justify-center gap-7 pt-12 md:hidden">
              <CarouselPrevious
                className="static h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none"
                variant="default"
              />
              <CarouselNext
                className="static h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none"
                variant="default"
              />
            </div>
          </Carousel>
        </div> */}
        {reviews && (
          <div className="w-full px-4">
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/3">
                      <div className="p-1">
                        <Card className="h-[300px] border border-[#C9AB81] bg-transparent">
                          <CardContent className="flex flex-col items-center justify-between gap-4 p-6">
                            {/* ⭐ Star Rating */}
                            <div className="flex justify-center">
                              {Array.from({ length: review.rating }).map(
                                (_, i) => (
                                  <Icons.star
                                    key={i}
                                    className="text-[#C9AB81]"
                                  />
                                ),
                              )}
                            </div>

                            {/* Review Text */}
                            <p className="font-cormorant line-clamp-6 text-center text-sm text-[#C9AB81]">
                              {review.text.text}
                            </p>

                            {/* Author Name */}
                            <p className="font-playfair text-center text-xs tracking-wide text-[#C9AB81]">
                              — {review.authorAttribution.displayName}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>

              {/* Navigation Arrows */}
              <div className="group absolute -bottom-20 left-1/2 z-40 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#C9AB81] text-[#C9AB81] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#C9AB81] text-[#C9AB81] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
