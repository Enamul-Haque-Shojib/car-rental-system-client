
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


const FAQ = () => {

    return (
       <div className="my-[100px] lg:w-[80%] w-full mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10 text-gray-800"> Frequently Asked Questions</h1>
         <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I book a car on your platform?</AccordionTrigger>
          <AccordionContent>
          To book a car, simply browse the available cars, select your desired vehicle, choose the pickup and drop-off dates and locations, and complete the booking form. You will receive a confirmation once the booking is successful.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What documents do I need to rent a car?</AccordionTrigger>
          <AccordionContent>
          You typically need a valid driving license, a government-issued ID or passport, and a credit or debit card for payment and security deposit purposes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I cancel or modify my booking?</AccordionTrigger>
          <AccordionContent>
          Yes, you can cancel or change your booking through your user dashboard. Please note that cancellation or modification policies may vary depending on the car and rental duration.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger> Is there a minimum age requirement for renting a car?</AccordionTrigger>
          <AccordionContent>
          Yes, most rental companies require drivers to be at least 21 years old. Some high-end or premium cars may have a higher age requirement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger> What happens if the car breaks down during my rental period?</AccordionTrigger>
          <AccordionContent>
          In case of a breakdown, contact our 24/7 support team immediately. We will assist you with roadside help and, if necessary, provide a replacement vehicle as soon as possible.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
       </div>
    )
}

export default FAQ
