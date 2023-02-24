// components
import Header from "@/components/header";
import Footer from "@/components/Footer";

// sections
import Hero from "@/sections/Hero";
import AboutMe from "@/sections/AboutMe";
import Reviews from "@/sections/Reviews";
import Skills from "@/sections/Skills";
import LetsWorkTogether from "@/sections/LetsWorkTogether";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <hr />
      <Reviews />
      <LetsWorkTogether />
      <Footer />
    </div>
  );
};

export default Home;
