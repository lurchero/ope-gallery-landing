import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Pillars from "../components/Pillars";
import GalleryPreview from "../components/GalleryPreview";
import FeaturedDrop from "../components/FeaturedDrop";
import Community from "../components/Community";
import EmailSignup from "../components/EmailSignup";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <GalleryPreview />
        <FeaturedDrop />
        <Community />
        <EmailSignup />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}