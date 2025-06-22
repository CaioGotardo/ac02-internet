import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
