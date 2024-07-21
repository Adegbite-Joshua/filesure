import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
    question: string;
    answer: string;
}

interface FaqsAccordionProps {
    faqs: FAQ[];
}

export function FaqsAccordion({ faqs }: FaqsAccordionProps) {
    return (
        <div className="col-span-2 md:col-span-1">
            <Accordion type="single" collapsible className="w-auto grid grid-cols-1 md:grid-cols-2 gap-3">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="w-auto">
                        <AccordionTrigger className='text-2xl font-bold faqs'>{faq.question}</AccordionTrigger>
                        <AccordionContent className='font-medium'>
                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}