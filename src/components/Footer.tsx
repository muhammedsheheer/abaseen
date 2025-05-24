"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#0f1d22]">
      <div className="h-[1px] w-full border-b-[1px] border-b-[#C9AB81]" />
      <div className="flex flex-col gap-4 px-4 pt-12 md:gap-6 lg:px-10 lg:pt-14">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-40"
            />
          </Link>
        </div>
        {/*big screen */}
        <div className="hidden flex-row items-center justify-center gap-40 md:flex">
          <div className="flex flex-col items-center justify-center gap-3 md:items-start">
            <Link
              href={"/"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
            >
              Home{" "}
            </Link>
            <Link
              href={"/menu"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
            >
              Menu{" "}
            </Link>
            <Link
              href={"/contact"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
            >
              Contact us{" "}
            </Link>
            <Link
              href={"/about-us"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
            >
              Our Story{" "}
            </Link>
            <Link
              href={"/table-booking"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
            >
              Booking{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div>
              <Link
                href={""}
                className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Contact{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href={"https://g.co/kgs/2wH8Uzf"}
                target="_blank"
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start"
              >
                999 Stockport Rd, Manchester <br /> M19 2SY, United Kingdom
              </Link>
              <Link
                href={"mailto:orders@abaseen.uk"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start"
              >
                orders@abaseen.uk
              </Link>
              <Link
                href={"tel:+44 161 442 0900"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start"
              >
                + 44 161 442 0900
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link
              href={""}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
            >
              Opening hours
            </Link>
            <p className="font-open_sans text-center text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start">
              Mon-Sun 1:00pm to 12:00am
            </p>
          </div>
        </div>
        {/* mobile screen */}

        <div className="flex flex-col items-start justify-start gap-4 md:hidden md:flex-row md:items-center md:justify-end md:gap-2">
          <div className="flex w-full flex-row items-start justify-start gap-8 md:w-[45%] md:flex-row md:items-center md:justify-end md:gap-16">
            <div className="flex flex-col items-start justify-start gap-3 md:items-start">
              <Link
                href={"/"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Home{" "}
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Menu{" "}
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Contact us{" "}
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Our Story{" "}
              </Link>
              <Link
                href={"/table-booking"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Booking{" "}
              </Link>
            </div>
            <div className="flex flex-col items-end gap-3 md:items-start">
              <div>
                <Link
                  href={""}
                  className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#C9AB81]"
                >
                  Contact{" "}
                </Link>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Link
                  href={"https://g.co/kgs/2wH8Uzf"}
                  target="_blank"
                  className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start"
                >
                  999 Stockport Rd, Manchester <br /> M19 2SY, United Kingdom
                </Link>
                <Link
                  href={"mailto:orders@abaseen.uk"}
                  className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start"
                >
                  orders@abaseen.uk
                </Link>
                <Link
                  href={"tel:+44 161 442 0900"}
                  className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start"
                >
                  + 44 161 442 0900
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-b-[#C9AB81]" />
          <div className="flex w-full flex-col items-center justify-center gap-8 pt-6 md:w-[45%] md:flex-row md:justify-start md:gap-20">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]">
                Opening hours
              </span>
              <p className="font-open_sans text-center text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start">
                Mon-Sun 1:00pm to 12:00am
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 md:ml-10 md:items-center md:justify-center">
          <Link
            href={"https://www.instagram.com/abaseenmcr/"}
            target="_blank"
            className="text-[#C9AB81]"
          >
            <Icons.instagram />
          </Link>
          <Link
            href={"https://www.facebook.com/abaseenmanchester/"}
            target="_blank"
            className="text-[#C9AB81]"
          >
            <Icons.facebook />
          </Link>
          <Link
            href={"https://g.co/kgs/2wH8Uzf"}
            target="_blank"
            className="text-[#C9AB81]"
          >
            <Icons.google />
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <span className="font-open_sans text-center text-xs font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start">
              © 2025 Abaseen , All Rights Reserved
            </span>

            <Link
              href={"https://foodo.ai"}
              target="_blank"
              className="font-open_sans text-center text-xs font-[400] uppercase tracking-[2px] text-[#C9AB81] md:text-start"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-1 h-[1px] w-full border-b-[1px] border-b-[#C9AB81]" />
    </footer>
  );
};

export default Footer;
