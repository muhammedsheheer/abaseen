import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "About Abaseen",
  description: "About Abaseen",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
  keywords: "about Abaseen",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
