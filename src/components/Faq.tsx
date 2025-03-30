import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

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
    <div className="max-w-3xl mx-auto px-4 py-12">
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

      <div className="text-center mt-12">
        <p className="text-pink-400 mb-4">Dodatna pitanja?</p>
        <Button
          variant="outline"
          className="rounded-full px-8 py-6 h-auto text-lg border-[#f96294] text-[#f96294] hover:bg-pink-50"
          onClick={() => {
            const contactForm = document.getElementById("contact-form");
            if (contactForm) {
              contactForm.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Kontaktiraj me
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
