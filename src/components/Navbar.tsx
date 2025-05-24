"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import { Plus } from "lucide-react";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 flex h-[110px] w-full flex-col items-center justify-between border-b-[0.25px] border-b-primary bg-transparent px-4 transition-all duration-0 ease-in-out`,
        isScrolled && "border-b-0 bg-[#070d0f]",
        pathname !== "/" && "border-b-0 bg-[#070d0f]",
      )}
    >
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-between gap-2",
        )}
      >
        <Link href="/">
          <Image
            src="/images/home/logo.png"
            width={55}
            height={69}
            alt="logo"
            className="absolute top-4 w-20"
          />
        </Link>

        <div
          className={cn(
            "hidden h-full min-w-[1300px] flex-row items-center justify-center gap-9 md:flex",
          )}
        >
          <Button asChild variant="link" className="px-0 uppercase">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-white hover:text-primary"
            >
              <span>Home</span> <Plus className="h-4 w-4 text-primary" />
            </Link>
          </Button>
          {/* <Button
                        asChild
                        variant="link"
                        className="px-0 uppercase text-accent"
                    >
                        <Link href="/menu" className="flex items-center justify-center gap-2 text-white hover:text-primary"><span>Menu</span> <Plus className="text-primary h-4 w-4" /></Link>
                    </Button> */}
          {/* <Button asChild variant="link" className="px-0 uppercase text-accent">
            <Link
              href="/drinks"
              className="flex items-center justify-center gap-2 text-white hover:text-primary"
            >
              <span>Drinks & Desserts</span>{" "}
              <Plus className="h-4 w-4 text-primary" />
            </Link>
          </Button>
          <Button asChild variant="link" className="px-0 uppercase text-accent">
            <Link
              href="/our-food"
              className="flex items-center justify-center gap-2 text-white hover:text-primary"
            >
              <span>Our Menu</span> <Plus className="h-4 w-4 text-primary" />
            </Link>
          </Button>
          <Button asChild variant="link" className="px-0 uppercase text-accent">
            <Link
              href="/shisha"
              className="flex items-center justify-center gap-2 text-white hover:text-primary"
            >
              <span> Shisha</span> <Plus className="h-4 w-4 text-primary" />
            </Link>
          </Button> */}
          <Button asChild variant="link" className="px-0 uppercase text-accent">
            <Link
              href="/about-us"
              className="flex items-center justify-center gap-2 text-white hover:text-primary"
            >
              <span>Our Story</span> <Plus className="h-4 w-4 text-primary" />
            </Link>
          </Button>
          <Button asChild variant="link" className="px-0 uppercase text-accent">
            <Link
              href="/table-booking"
              className="flex items-center justify-center gap-2 text-white hover:text-primary"
            >
              <span>Reservation</span> <Plus className="h-4 w-4 text-primary" />
            </Link>
          </Button>
          <Button asChild variant="link" className="px-0 uppercase text-accent">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 text-white hover:text-primary"
            >
              <span>Contact Us</span> <Plus className="h-4 w-4 text-primary" />
            </Link>
          </Button>

          <Link href="/menu">
            <Button
              className="hero-button ml-8 flex items-center justify-center gap-3 px-8 py-7"
              variant="image"
            >
              Order Online
            </Button>
          </Link>
        </div>

        <Sidebar>
          <Button
            variant="ghost"
            className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
          >
            <span className="sr-only">Menu</span>
            <EqualizerIcon />
          </Button>
        </Sidebar>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
