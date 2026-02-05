import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import FeaturedDrop from "@/components/FeaturedDrop";
import Community from "@/components/Community";
import EmailSignup from "@/components/EmailSignup";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <FeaturedDrop />
        <Community />
        <EmailSignup />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
