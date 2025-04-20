import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const FaqItems = [
  {
    question: "Da li ovaj program moze da koristi svako?",
    answer:
      "Prilagođeno baš tebi Svaka žena je jedinstvena, i moj program to poštuje. Bilo da si početnica ili već treniraš, vežbe su prilagođene tvom nivou, ciljevima i tempu.",
  },
  {
    question: "Kako funkcionise online program?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    question: "Koje u prednosti online programa?",
    answer:
      "Fleksibilnost bez granica Zaboravi na gužve u teretani i gubljenje vremena! Treniraj kad ti odgovara, ujutru pre posla, tokom pauze ili uveče – potpuno prilagođeno tvom rasporedu.",
  },
  {
    question: "Da li mogu da se obratim treneru za pomoc?",
    answer:
      "Naravno! Uvek sam tu za tebe. Možeš me kontaktirati putem emaila, instragrama ili platforme, i rado ću odgovoriti na sva tvoja pitanja ili prilagoditi treninge.",
  },
];

export const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-20 mb-36">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-[#f96294] bg-clip-text text-transparent">
          Najčešće postavljena pitanja
        </h2>
        <p className="text-xl text-pink-300">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        </p>
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
            <div className="px-8 py-6 text-white">{FaqItems[1].answer}</div>
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
          <h2 className="text-lg md:text-2xl font-bold tracking-tight text-pink-400">
            Dodatna pitanja?
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="https://instagram.com/_kriss_tina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f96294] text-white transition-colors hover:bg-opacity-90"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              to="https://tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f96294] text-white transition-colors hover:bg-opacity-90"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
