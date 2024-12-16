import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export const FaqItem = ({ question, answer, key }: {question: string, answer: string, key: number}) => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
    <AccordionItem value={`item-${key}`} className="border-none bg-pink-500 rounded-[30px]">
      <AccordionTrigger className="bg-pink-500 rounded-full px-8 py-4 text-white font-medium text-left w-full transition-all duration-300 ease-in-out">
        {question}
      </AccordionTrigger>
      <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
        <hr className="w-[90%] mx-auto"/>
        <div className="px-8 py-6 text-white">
          {answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}