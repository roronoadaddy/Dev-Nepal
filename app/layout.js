import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Poppins requires explicit weights — it has no variable-font axis
  variable: "--font-sans",
});
import "./globals.css";

export const metadata = {
  title: "Dev Nepal",
  description: "Giving Identity To All Nepali Devs",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
