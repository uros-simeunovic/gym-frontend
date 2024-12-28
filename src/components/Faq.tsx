import { ChevronDown } from "lucide-react";
import { Accordion } from "./ui/accordion";
import { Button } from "./ui/button";
import { FaqItem } from "./FaqItem";

const FaqItems = [
  {
    question: "Da li ovaj program moze da koristi svako?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    question: "Kako funkcionise online program?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    question: "Koje u prednosti online programa?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    question: "Da li mogu da se obratim treneru za pomoc?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

export const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
          Najčešće postavljena pitanja
        </h2>
        <p className="text-xl text-pink-300">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {FaqItems.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </Accordion>

      <div className="text-center mt-12">
        <p className="text-pink-400 mb-4">Dodatna pitanja?</p>
        <Button
          variant="outline"
          className="rounded-full px-8 py-6 h-auto text-lg border-pink-500 text-pink-500 hover:bg-pink-50"
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
