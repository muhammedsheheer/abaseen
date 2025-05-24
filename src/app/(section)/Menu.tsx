"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Menu = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".menu-one", {
        scrollTrigger: {
          trigger: ".menu-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".menu-two", {
        scrollTrigger: {
          trigger: ".menu-two",
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
      gsap.to(".menu-one", {
        scrollTrigger: {
          trigger: ".menu-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".menu-two", {
        scrollTrigger: {
          trigger: ".menu-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });
    gsap.to(".menu-arrow", {
      scrollTrigger: {
        trigger: ".menu-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8,
    });

    const splitType = document.querySelectorAll(".head-menu");
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
  return (
    <section
      id="welcome"
      className="relative h-fit w-full bg-[#0f1d22] py-12 lg:py-24"
    >
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 lg:flex-row lg:gap-0 lg:p-0">
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <div className="flex w-full flex-col items-center justify-center gap-12">
              <div className="flex w-full flex-col items-center justify-center gap-4">
                <p className="menu-one font-stone text-xl font-[200] text-primary md:-ml-[50px] md:text-3xl">
                  Special selection
                </p>
                <p className="styled_section_head flex items-center justify-center gap-3 break-words text-center uppercase text-primary">
                  <Image
                    src="/images/left.png"
                    alt="left"
                    width={44}
                    height={12}
                    className="menu-arrow w-fit"
                    style={{
                      transform: "scale(0.5)",
                    }}
                  />
                  <span className="head-menu max-w-72 md:max-w-full">
                    From our menu
                  </span>
                  <Image
                    src="/images/right.png"
                    alt="right"
                    width={44}
                    height={12}
                    className="menu-arrow h-fit w-fit"
                    style={{
                      transform: "scale(0.5)",
                    }}
                  />
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-5 md:justify-between lg:flex-row">
                <div
                  className="hidden h-[800px] w-10 lg:flex xl:w-[108px]"
                  style={{
                    backgroundImage: "url('/images/home/facility/side.png')",
                  }}
                ></div>
                {/* TODO: Put the menus ans subs into an array/json and use JS to render this */}
                <div className="flex h-full w-full flex-col justify-center gap-9 px-2 md:w-9/12 md:flex-row md:justify-between md:gap-14">
                  <div className="flex w-full flex-col gap-9 md:w-1/2">
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Omakasi sashimi boat
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £45
                        </p>
                      </div>
                      <p className="menu_item_sub menu_item_sub text-[#9aa0a2]">
                        Salmon, tuna, seabass, ebi prawn, sashimi 3pcs each and
                        california roll (8pcs)
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Omakasi nigiri boat
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £45
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        Salmon, tuna, seabass, ebi prawn, nigiri 3pcs each and
                        california roll (8pcs)
                      </p>
                    </div>

                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Sushi platter boat, share for 2-3
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £60
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        Avocado, cucumber inside out, topped salmon, tuna,
                        seabass, ebi prawn, sashimi (3pcs each) salmon, tuna,
                        seabass, ebi prawn, nigiri (2pcs each) california roll
                        (8pcs) california roll
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Dynamite don
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £22
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        Deep fried prawn serves with rice, spicy mayo, teri
                        sauce crispy onion
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Lamb Chops
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £25
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        250-270g, 5 pieces Lamb Racks
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Lamb Kafes
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £55
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        800-1kg, 12 Pieces Chops and Sirloin side of Lamb
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Lamb Chops Chimichurri
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £26
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        Grilled Lamb chops with mint Chimichurri and pickled
                        cucumber
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-9 md:w-1/2">
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Vu steak
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £36
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        450-550g Porterhouse
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          New york steak
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £28
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        270-300g Sirloin Steak
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Fillet mignon
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £36
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        230-250g Tenderloin Served with Asparagus
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Tomahawk steak
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £60
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        650 -750g Thicker Ribeye
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Dallas steak
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £34
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        400-500g Ribeye on The Bone
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Lokum steak
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £34
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        230-250g Sliced Fillet Mignon
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="menu_item w-auto text-primary">
                          Spicy ribey steak
                        </p>
                        <div className="mr-[15px] h-[1px] flex-grow border-y border-y-[#715B3E] py-[2px]"></div>
                        <p className="flex w-auto items-end text-lg text-primary">
                          £34
                        </p>
                      </div>
                      <p className="menu_item_sub text-[#9aa0a2]">
                        250/300g Served with Vu Spicy Sauce , Sesame Seeds
                        ,Fried Onion and Pepper
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="hidden h-[800px] w-10 lg:flex xl:w-[108px]"
                  style={{
                    backgroundImage: "url('/images/home/facility/side.png')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center pb-5 pt-20">
        <Link href="/menu">
          <Button
            variant="image"
            className="font-open bg-button-hover px-10 py-6 font-[200] uppercase leading-[22.4px] tracking-[13%] text-white lg:h-[61.76px] lg:w-[195.91px]"
          >
            View Menu
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Menu;
