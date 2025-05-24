import Image from "next/image";
import Link from "next/link";

const Map = ({}) => {
  return (
    <section className="h-fit w-full">
      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-center bg-[#0a1315] px-4 py-6">
          <div className="border-r-[1px] border-r-primary pr-2 md:pr-6">
            <Link href={"https://www.tripadvisor.in/Restaurant_Review-g1791615-d19258647-Reviews-Vu_Lounge-Bushey_Hertfordshire_England.html"} target="_blank">
            <Image
              src="/images/tripadvisor.png"
              width={272}
              height={57}
              alt="tripadvisor"
            />
            </Link>
          </div>
          <div className="pl-2 md:pl-6">
            <Image
              src="/images/design-my-night.png"
              width={220}
              height={56}
              alt="tripadvisor"
            />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.8982009132355!2d-0.3649722239962183!3d51.643389371844535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876156c4ad8af4b%3A0xc70fe1d6707238c0!2sVu%20Lounge!5e0!3m2!1sen!2sin!4v1733298204427!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[300px] w-full grayscale invert"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
