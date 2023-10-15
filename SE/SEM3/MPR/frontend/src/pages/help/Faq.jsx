import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer: "The purpose of this website is to provide information about our products and services.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team by phone or email. Visit the 'Contact Us' page for more information.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds for products returned within 30 days of purchase. Please review our refund policy for more details.",
    },
  ];

  return (
    <Box maxW="container.md" mx="auto" py={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} border="none">
            <h2>
              <AccordionButton px={4} py={2} bg="gray.100" _hover={{ bg: "gray.200" }}>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold">
                    {faq.question}
                  </Text>
                </Box>
                <AccordionIcon color="gray.500" />
              </AccordionButton>
            </h2>
            <AccordionPanel px={4} pb={4} bg="gray.50" color="gray.700">
              <Text fontSize="lg">{faq.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQ;
