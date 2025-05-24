import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/home/logo.png"
              width={197}
              height={192}
              alt="Foodo"
            />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-start justify-start gap-7">
            <Link
              href="/"
              className="font-playfair flex w-full justify-start p-0 text-2xl font-normal text-accent text-white"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="font-playfair flex w-full justify-start p-0 text-2xl font-normal text-accent text-white"
            >
              Our Story
            </Link>
            <Link
              href="/table-booking"
              className="font-playfair flex w-full justify-start p-0 text-2xl font-normal text-accent text-white"
            >
              Reservation
            </Link>
            <Link
              href="/contact"
              className="font-playfair flex w-full justify-start p-0 text-2xl font-normal text-accent text-white"
            >
              Contact
            </Link>
            {/* <Button
                              variant="link"
                              className={cn("w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800")}
                              asChild
                          >
                              <Link href="/menu" className="flex gap-2 py-6"><Dock /> <span>Menu</span></Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                          >
                              <Link href="/about-us" className="flex gap-2 py-6"><ShieldQuestion /> <span>About</span> </Link>
                          </Button>
                          <Button
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                              asChild
                          >
                              <Link href="/contact" className="flex gap-2 py-6"><Phone /> <span>Contact</span></Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start px-1 p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                          >
                              <Link href="/table-booking" className="flex gap-2 py-6"><BookCheck /> <span>Booking</span> </Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white"
                          >
                              <Link href="/gift-voucher" className="flex gap-2 py-6" ><Gift /> <span>Gift Voucher</span></Link>
                          </Button> */}
            <Link href="/menu">
              <Button
                className="hero-button ml-8 flex items-center justify-center gap-3 px-8 py-7"
                variant="image"
              >
                Order Online
              </Button>
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
