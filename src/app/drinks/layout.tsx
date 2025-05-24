import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Drinks Menu | Signature Cocktails & Premium Beverages at Vu Lounge",
  description:
    "Explore Vu Lounge’s expertly crafted drinks menu, featuring signature cocktails, fine wines, refreshing mocktails, and premium spirits. Indulge in an unforgettable drinking experience in Bushey.",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
  keywords:
    "Vu Lounge drinks menu, signature cocktails Bushey, premium spirits, wine list, mocktails, bar Bushey",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
