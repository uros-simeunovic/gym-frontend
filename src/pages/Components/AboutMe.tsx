import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import aboutMeImage from "@/assets/AboutMe.webp";
import instagramLogo from "@/assets/instagram.png";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const textSectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: textSectionRef,
    offset: ["start start", "end start"],
  });

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    bounce: 0,
    mass: 0.1,
    duration: 0.25,
  });

  const img = useTransform(scrollSpring, [0, 1], [0, 200]);
  const text = useTransform(scrollSpring, [0, 1], [0, 300]);
  const opacity = useTransform(scrollSpring, [0, 1], ["100%", "0%"]);

  return (
    <div className="h-[800px] pt-20 bg-radial">
      <div
        ref={textSectionRef}
        className="h-[400px] sm:h-[600px] relative flex justify-center pt-10"
        id="about-me"
      >
        <div className="absolute">
          <motion.h1
            className="text-[100px] font-bold text-white"
            style={{ y: text, opacity: opacity }}
          >
            O Meni
          </motion.h1>
        </div>
        <motion.img
          src={aboutMeImage}
          alt="about-me-image"
          className="h-full object-cover sticky top-0"
          style={{
            translateY: img,
          }}
        />
      </div>
      <div className="rounded-t-[60px] absolute w-full h-[500px] bg-white px-8 pt-10">
        <div className="flex flex-col gap-6 sm:w-[700px] md:w-[1000px] relative mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-[#f96294]">
              Kristina Mitrović
            </h2>
            <hr className="my-2 border-pink-300" />
            <p className="text-[#f96294]">
              Napravila sam ovaj online plan na osnovu godina rada, ali pre
              svega - zahvaljujući mojim devojkama. Slušala sam šta vam treba,
              testirala zajedno sa vama, korigovala, prilagođavala i gledala
              kako rastete. Svaka vežba, svaka faza i svaki savet u ovom
              programu ima svoje “zašto” - jer je proveren u stvarnim
              transformacijama, uz stvarne ljude. Tu sam da vam pomognem da
              zaista uspete. Uz razumevanje, iskustvo i konkretne korake, ovaj
              plan je vaša mapa ka najboljoj verziji sebe.
            </p>
            <hr className="my-2 border-pink-300" />
          </div>
          <div className="space-y-4 flex flex-col items-center md:block">
            <Link
              to={"https://www.instagram.com/mitrovic_kris/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 cursor-pointer"
            >
              <img src={instagramLogo} alt="instagram-logo" className="w-8" />
              <p className="text-lg text-[#f96294]">@mitrovic_kris</p>
            </Link>
            {/* <button
              onClick={scrollToSection}
              className="bg-[#f99b62] text-white text-[18px] font-semibold w-[120px] h-[45px] rounded-[40px]"
            >
              Kontakt
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
