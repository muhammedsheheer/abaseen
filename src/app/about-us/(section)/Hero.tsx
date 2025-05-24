// import Image from "next/image";

// const Hero = ({}) => {
//   return (
//     <section
//       id="hero"
//       className="flex w-full items-center justify-center pt-20 md:pt-8"
//     >
//       <div className="relative flex min-h-[100vh] w-full items-center justify-center">
//         <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
//           <div className="flex w-full items-center justify-center lg:w-1/2">
//             <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
//               <h1 className="font-playfair max-w-[500px] text-4xl font-semibold text-[#fbead2] md:leading-[66px] lg:text-6xl">
//                 Welcome to Abaseen Every Flavor, a Tradition.
//               </h1>
//               <p className="font-manrope font-normal text-[#C1B6A6]">
//                 Abaseen is proudly rooted in the heart of the community. What
//                 began as a humble restaurant with just a handful of seats has
//                 grown over the years into a vibrant destination known for its
//                 authentic cuisine and warm hospitality. Abaseen holds a special
//                 place in our hearts — and we’re honored to now be part of yours.
//               </p>
//             </div>
//           </div>
//           <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
//             <Image
//               src="/images/about-us/DSC03382.png"
//               width={2648}
//               height={3936}
//               alt="hero"
//               className="w-full object-cover md:h-[900px]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#0E0C07] text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 py-24 md:flex-row md:py-32 lg:px-8">
        {/* Left: Text Content */}
        <div className="flex w-full flex-col items-start justify-center md:w-1/2">
          <h1 className="font-playfair text-balance text-4xl font-bold leading-tight text-[#FBEAD2] md:text-5xl lg:text-6xl">
            Abaseen Restaurant
            <br />
            <span className="text-[#C9AB81]">Every Flavor, a Tradition</span>
          </h1>

          <p className="font-manrope mt-6 max-w-md text-base leading-relaxed text-[#C1B6A6] md:text-lg">
            Rooted in the heart of the community, Abaseen began as a modest
            eatery and has grown into a celebrated culinary destination. Known
            for its authentic cuisine and heartfelt hospitality, Abaseen is more
            than just a restaurant — it&apos;s a tradition.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/menu"
              className="rounded-full bg-[#C9AB81] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#b99763]"
            >
              View Menu
            </a>
            <a
              href="/table-booking"
              className="rounded-full border border-[#C9AB81] px-6 py-3 text-sm font-semibold text-[#C9AB81] transition hover:bg-[#C9AB81] hover:text-black"
            >
              Book a Table
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg md:rounded-3xl">
            <Image
              src="/images/about-us/DSC03382.png"
              alt="Abaseen Hero Image"
              width={1200}
              height={1600}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
