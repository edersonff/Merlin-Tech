import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import { BsCheck2All } from "react-icons/bs";
import Image from "next/image";
import { useContact } from "@/store/contact";

export default function FrequentlyAskedQuestionHome() {
  const { open } = useContact();
  return (
    <div className="center py-20 content-px">
      <div className="content">
        <div className="pb-10 text-center">
          <h2 className="mb-5 text-4xl font-semibold">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-lg">
            Explore the Top Questions from Our Customers:
          </p>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-6 mb-5">
          <Accordion allowMultiple className="flex-1 flex flex-col gap-3">
            <AccordionItemHome
              title="How can I request a software development quote?"
              content={`To request a software development quote, simply click on the "Get Your Free Software Quote" button on our homepage and fill out the requested information. We'll get back to you promptly with your quote.`}
            />
            <AccordionItemHome
              title="How long does it take to develop custom software?"
              content="The time required for custom software development can vary depending on the complexity of the project. We'll provide you with a timeline estimate as part of your quote."
            />
            <AccordionItemHome
              title="Do you provide ongoing support for software projects?"
              content="Yes, we offer dedicated support and maintenance services to ensure the long-term success of your software project."
            />
            <AccordionItemHome
              title="Is the initial consultation free?"
              content="Yes, our initial consultations are free of charge. We're here to discuss your project, understand your needs, and provide guidance."
            />

            <AccordionItemHome
              title="Are your software solutions cost-effective?"
              content="Yes, our cost-effective solutions are designed to provide exceptional value and savings while optimizing your resources and investments."
            />
          </Accordion>
          <Accordion allowMultiple className="flex-1 flex flex-col gap-3">
            <AccordionItemHome
              title="What types of software solutions do you offer?"
              content="We offer a wide range of software solutions, including custom software development, mobile app development, web application development, and more. Our team can tailor our services to meet your specific needs."
            />
            <AccordionItemHome
              title="Can you integrate software with my existing systems?"
              content="Absolutely! We specialize in seamless software integration with your existing systems and processes, ensuring a smooth transition."
            />
            <AccordionItemHome
              title="What makes Merlin's software solutions unique?"
              content=" Merlin stands out for its commitment to simplifying technology, user-friendly design, and a passion for innovation. We focus on delivering exceptional value to our clients."
            />
            <AccordionItemHome
              title="How can I get in touch with your team?"
              content={`You can reach our team by sending an email to support@merlin.app.br. We're also active on social media for your convenience.`}
            />
            <AccordionItemHome
              title="What industries do you serve?"
              content="We have experience serving a wide range of industries, including healthcare, finance, e-commerce, and more. Our versatile team can adapt to various sectors and their specific needs."
            />
          </Accordion>
        </div>
        <div className="center flex-col gap-5">
          <Button
            size="lg"
            colorScheme="primary"
            px={10}
            className="bg-primary font-bold text-white center mt-10 py-6"
            onClick={open}
          >
            <BsCheck2All className="mr-2 text-2xl" stroke-width={1} />
            Start Right Now!
          </Button>
          <Image
            src="/images/others/secure-checkout.webp"
            alt="Secure Checkout"
            width={300}
            height={300}
            className="selectDisable"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

function AccordionItemHome({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          _expanded={{
            color: "#412B6D",
          }}
          bgColor="#F2F2F2"
          py={4}
        >
          <AccordionIcon
            className="ml-0 mr-3 bg-primary rounded-full"
            color="white"
            fontWeight="bold"
          />
          <Box flex="1" textAlign="left" fontWeight="medium">
            {title}
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel bgColor="#eaeaea" py={4}>
        {content}
      </AccordionPanel>
    </AccordionItem>
  );
}
