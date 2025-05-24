// import { Icons } from "@/components/Icon";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const JoinUs = ({}) => {
//   return (
//     <section
//       className="relative flex h-screen w-full items-center justify-center"
//       style={{
//         backgroundImage: `url('/images/about-us/DSC03437.png')`,
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60"></div>
//       <div className="z-40 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
//         <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
//           <h1 className="font-playfair max-w-[500px] text-center text-4xl md:text-5xl md:leading-[60px]">
//             Savor the Moment
//             <br /> at Abaseen
//           </h1>
//           <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
//             Discover the perfect harmony of flavor and atmosphere at Abaseen.
//             Every dish is crafted with care, celebrating authentic cuisine and
//             cultural richness. Let us make your dining experience truly
//             unforgettable with our warm hospitality and exceptional food.
//           </p>
//           <Button
//             variant="image"
//             className="group w-fit items-center gap-[1.19rem] px-10 py-7 font-semibold uppercase"
//           >
//             <Link
//               href="/table-booking"
//               className="flex items-center justify-center gap-2"
//             >
//               Book A Table{" "}
//               <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-white" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinUs;

import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = () => {
  return (
    <section
      className="relative flex w-full items-center justify-center bg-cover bg-fixed bg-center px-4 py-24 md:py-36"
      style={{
        backgroundImage: "url('/images/about-us/DSC03437.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center text-white md:px-0">
        <h2 className="font-playfair text-4xl leading-tight text-[#FBEAD2] drop-shadow-md md:text-6xl">
          Savor the Moment
          <br />
          at <span className="text-[#C9AB81]">Abaseen</span>
        </h2>

        <p className="font-manrope max-w-2xl text-base leading-relaxed text-[#C1B6A6] drop-shadow-sm md:text-lg">
          Discover the perfect harmony of flavor and atmosphere at Abaseen. Each
          dish celebrates authentic cuisine and cultural richness — all served
          with warmth and hospitality that makes every visit unforgettable.
        </p>

        <Button
          variant="image"
          className="group w-fit items-center gap-[1.19rem] px-10 py-7 font-semibold uppercase"
        >
          <Link
            href="/table-booking"
            className="flex items-center justify-center gap-2"
          >
            Book A Table{" "}
            <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-white" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default JoinUs;
