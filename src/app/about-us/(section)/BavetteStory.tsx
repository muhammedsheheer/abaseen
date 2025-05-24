// import Image from "next/image";

// const BavetteStory = ({}) => {
//   return (
//     <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
//       <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
//         <h2 className="font-playfair text-center text-4xl text-[#C1B6A6] md:left-[15%] md:text-8xl">
//           The Abaseen
//           <br />
//           Story
//         </h2>
//         <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
//           <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
//             <Image
//               src="/images/about-us/DSC03517.png"
//               width={6024}
//               height={4024}
//               alt="private dining"
//               className="w-full rotate-180 rounded-lg object-cover md:h-[600px] md:rounded-none"
//             />
//           </div>
//           <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
//             <h1 className="font-playfair max-w-[500px] text-center text-4xl md:text-start md:text-7xl">
//               From Dream
//               <br />
//               to Sizzle
//             </h1>
//             <p className="max-w-full text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
//               Abaseen is a culinary sanctuary born from a deep love for
//               authentic flavors and heartfelt hospitality. What began as a
//               modest eatery has flourished into a beloved dining destination,
//               known for its inviting ambiance and rich, traditional cuisine. Our
//               story is one of passion, perseverance, and a genuine commitment to
//               bringing people together through the joy of food.
//               <br />
//               <br />
//               Located in the heart of Manchester, Abaseen has become a symbol of
//               cultural warmth and flavorful excellence. Over the years, we’ve
//               grown far beyond our humble beginnings, creating a vibrant space
//               where every guest feels at home. Each dish is thoughtfully
//               prepared, capturing the essence of tradition and the quality that
//               defines the Abaseen experience.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BavetteStory;

import Image from "next/image";

const BavetteStory = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-[#0E0C07] px-4 py-16 lg:px-20">
      <div className="w-full max-w-7xl space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-playfair text-4xl leading-tight text-[#C9AB81] md:text-7xl">
            The Abaseen
            <br />
            <span className="text-[#FBEAD2]">Story</span>
          </h2>
        </div>

        {/* Content Row */}
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Image */}
          <div className="w-full overflow-hidden rounded-xl shadow-xl md:w-1/2">
            <Image
              src="/images/about-us/DSC03517.png"
              width={6024}
              height={4024}
              alt="Abaseen Story"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full space-y-8 md:w-1/2 md:pl-12">
            <h3 className="font-playfair text-center text-3xl leading-snug text-[#FBEAD2] md:text-start md:text-5xl">
              From Dream
              <br />
              to Sizzle
            </h3>
            <p className="font-manrope text-center text-base leading-relaxed text-[#C1B6A6] md:text-start md:text-lg">
              Abaseen is a culinary sanctuary born from a deep love for
              authentic flavors and heartfelt hospitality. What began as a
              modest eatery has flourished into a beloved dining destination,
              celebrated for its rich traditions and welcoming spirit.
              <br />
              <br />
              Nestled in the heart of Manchester, Abaseen has grown far beyond
              its humble beginnings. Today, it stands as a symbol of flavorful
              excellence and cultural warmth, where every dish tells a story —
              thoughtfully prepared to connect hearts through food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
