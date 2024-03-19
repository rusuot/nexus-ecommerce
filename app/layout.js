/** @format */

import Header from "@/components/header";
import Footer from '@/components/footer'
export const metadata = {
  title: "Nexus Ecommerce",
  description: "world wide delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
