'use client'
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer ";
import Header from "@/components/Header";
import Hero from "@/components/Hero ";
import Highlights from "@/components/Highlights ";
import Navbar from "@/components/Navbar ";
import Image from "next/image";
export default function Home() {
 
  return (
    <main className=" ">
      <Header />
      <Navbar />
      <Hero />
      <Highlights />
      <Blog />
      <ContactUs  />
      <Footer />
    </main>
  );
}
