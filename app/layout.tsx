import "./global.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

export const metadata = {
  title: "Elshod Portfolio",
  description: "Elshod Tukhtamurodov , Portfolio,  FrontEnd developer",
};

const nunito = Nunito({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
