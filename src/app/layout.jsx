import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});


export const metadata = {
  title: "Grocery Shop | Piyal Islam",
  description: "This is a gorcery shop design and developed by Piyal Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
