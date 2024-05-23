import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function Faq() {
  return (
    <MDBContainer className="mt-5 no-left-border" style={{Width: '100%', marginLeft:"10px", }}>
      <MDBAccordion alwaysOpen >
        <MDBAccordionItem collapseId={} headerTitle="What are the fees for using tuition?">
        Lorem ipsum dolor sit amet consectetur. Pulvinar laoreet turpis sit sit tincidunt nisi quis magnis.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="How can i be sure my school has received the payment?">
        Lorem ipsum dolor sit amet consectetur. Pulvinar laoreet turpis sit sit tincidunt nisi quis magnis.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="How long will it take for my institution to receive the payment">
        Lorem ipsum dolor sit amet consectetur. Pulvinar laoreet turpis sit sit tincidunt nisi quis magnis.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="What are the fees for using tuition?">
        Lorem ipsum dolor sit amet consectetur. Pulvinar laoreet turpis sit sit tincidunt nisi quis magnis.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="What are the fees for using tuition?">
        Lorem ipsum dolor sit amet consectetur. Pulvinar laoreet turpis sit sit tincidunt nisi quis magnis.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle="What are the fees for using tuition?">
        Lorem ipsum dolor sit amet consectetur. Pulvinar laoreet turpis sit sit tincidunt nisi quis magnis.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={7} headerTitle="What are the fees for using tuition?">
        Lorem ipsum dolor sit amet consectetur. Pulvinar laoreet turpis sit sit tincidunt nisi quis magnis.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
}
