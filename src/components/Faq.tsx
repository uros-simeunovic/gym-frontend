import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import tiktok from "@/assets/tiktok.svg";
import instagram from "@/assets/instagram.svg";
import { Link } from "react-router-dom";

const FaqItems = [
  {
    question: "Da li ovaj program može da koristi svako?",
    answer:
      "Svaka žena je jedinstvena, i moj program to poštuje. Bilo da si početnica ili već treniraš, vežbe su prilagođene tvom nivou, ciljevima i tempu.",
  },
  {
    question: "Kako funkcioniše online program?",
    answer: "Program uključuje:",
    dots: [
      "Video demonstracije svih vežbi",
      "Detaljna uputstva za svaki trening",
      "Personalizovane preporuke",
    ],
    answer2:
      "Pristup materijalima dobijaš odmah nakon prijave i možeš ih koristiti kad god ti odgovara.",
  },
  {
    question: "Koje u prednosti online programa?",
    answer:
      "Zaboravi na gužve u teretani i gubljenje vremena! Treniraj kad ti odgovara, ujutru pre posla, tokom pauze ili uveče - potpuno prilagođeno tvom rasporedu.",
  },
  {
    question: "Da li mogu da se obratim treneru za pomoć?",
    answer:
      "Naravno! Uvek sam tu za tebe. Možeš me kontaktirati putem email-a, instagram-a ili platforme, i rado ću odgovoriti na sva tvoja pitanja ili prilagoditi treninge.",
  },
];

export const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-20 mb-36">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f96294]">
          Najčešće postavljena pitanja
        </h2>
        {/* <p className="text-xl text-pink-300">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        </p> */}
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem
          value={"item-1"}
          className="border-none bg-[#f96294] rounded-[30px]"
        >
          <AccordionTrigger className="bg-[#f96294] rounded-full px-8 py-4 text-white font-medium text-left w-full transition-all duration-300 ease-in-out">
            {FaqItems[0].question}
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
            <hr className="w-[90%] mx-auto" />
            <div className="px-8 py-6 text-white">{FaqItems[0].answer}</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value={"item-2"}
          className="border-none bg-[#f96294] rounded-[30px]"
        >
          <AccordionTrigger className="bg-[#f96294] rounded-full px-8 py-4 text-white font-medium text-left w-full transition-all duration-300 ease-in-out">
            {FaqItems[1].question}
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
            <hr className="w-[90%] mx-auto" />
            <div className="px-8 py-6 space-y-4 text-white">
              <div>{FaqItems[1].answer}</div>
              <div>
                {FaqItems[1].dots?.map((dot, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 mt-2 text-white"
                  >
                    <span className="text-pink-300">•</span>
                    <p>{dot}</p>
                  </div>
                ))}
              </div>
              <div>{FaqItems[1].answer2}</div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value={"item-3"}
          className="border-none bg-[#f96294] rounded-[30px]"
        >
          <AccordionTrigger className="bg-[#f96294] rounded-full px-8 py-4 text-white font-medium text-left w-full transition-all duration-300 ease-in-out">
            {FaqItems[2].question}
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
            <hr className="w-[90%] mx-auto" />
            <div className="px-8 py-6 text-white">{FaqItems[2].answer}</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value={"item-4"}
          className="border-none bg-[#f96294] rounded-[30px]"
        >
          <AccordionTrigger className="bg-[#f96294] rounded-full px-8 py-4 text-white font-medium text-left w-full transition-all duration-300 ease-in-out">
            {FaqItems[3].question}
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
            <hr className="w-[90%] mx-auto" />
            <div className="px-8 py-6 text-white">{FaqItems[3].answer}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="container mx-auto my-20">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-lg md:text-2xl font-bold tracking-tight text-[#f96294]">
            Dodatna pitanja?
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="https://www.instagram.com/mitrovic_kris/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f96294] text-white transition-colors hover:bg-opacity-90"
            >
              <img className="h-6 w-6" src={instagram} alt="instagram-logo" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              to="https://www.tiktok.com/@kristinna.trener"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f96294] text-white transition-colors hover:bg-opacity-90"
            >
              <img className="h-6 w-6" src={tiktok} alt="tiktok-logo" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
