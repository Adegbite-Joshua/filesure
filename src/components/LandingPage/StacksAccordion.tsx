import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export function StacksAccordion() {
    return (
        <div className="col-span-2 md:col-span-1">
            <Accordion type="single" collapsible className="w-auto">
                <AccordionItem value="item-1" className='w-auto border-0'>
                    <AccordionTrigger>iOS development</AccordionTrigger>
                    <AccordionContent>
                        We offer a comprehensive iOS development service that includes designing, coding, and testing applications for iPhone and iPad.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-0" value="item-2">
                    <AccordionTrigger>Android development</AccordionTrigger>
                    <AccordionContent>
                        Our Android development services cover a wide range of applications, from enterprise solutions to consumer apps, using the latest Android SDKs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-0" value="item-3">
                    <AccordionTrigger>Web development</AccordionTrigger>
                    <AccordionContent>
                        We build responsive and interactive websites using modern technologies like React, Angular, and Vue.js, ensuring compatibility across all devices.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-0" value="item-4">
                    <AccordionTrigger>UI/UX design</AccordionTrigger>
                    <AccordionContent>
                        Our UI/UX design services focus on creating intuitive and visually appealing interfaces that enhance user experience and engagement.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-0" value="item-5">
                    <AccordionTrigger>Testing</AccordionTrigger>
                    <AccordionContent>
                        We provide thorough testing services, including automated and manual testing, to ensure the highest quality and performance of your applications.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-0" value="item-6">
                    <AccordionTrigger>Launch</AccordionTrigger>
                    <AccordionContent>
                        Our launch services help you deploy your applications smoothly, with a focus on scalability, performance, and security.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-0" value="item-7">
                    <AccordionTrigger>IT consulting</AccordionTrigger>
                    <AccordionContent>
                        We offer IT consulting services to help you plan, design, and implement technology solutions that align with your business goals.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default StacksAccordion;
