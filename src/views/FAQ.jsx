import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button } from "react-bootstrap";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available.",
    },
  ];

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-4">Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={index.toString()}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                  <i
                    className={`bi bi-chevron-${
                      openIndex === index ? "up" : "down"
                    }`}
                  ></i>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>{faq.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default FAQ;
