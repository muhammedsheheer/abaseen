import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Abaseen ",
  description: "Contact Abaseen",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: "Contact Abaseen",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
