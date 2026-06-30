
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.css"
import "glightbox/dist/css/glightbox.css"
import Header from "./components/Header";

const raleway  = Raleway({ subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Nightforge Performance",
  description: "Site de Nightforge Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className={raleway.className}>
        <Header>
          
        </Header>
        {children}</body>
    </html>
  );
}
