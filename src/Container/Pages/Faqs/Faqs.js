import React from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Container, Accordion } from 'react-bootstrap'

const Faqs = () => {
  return (
    <div>
      <Banner heading={"FAQS"} />

      <Container>
        <div className='main_description_wrapper'>

          <h5 className='mb-3'>Frequently Asked Questions (FAQ) for Review My Work</h5>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>1- What is Review My Work?</Accordion.Header>
              <Accordion.Body>
                Review My Work is a specialized platform designed to connect creators with highly trained and currently working professionals in various fields of art and creativity. Our mission is to provide insightful, constructive feedback on your work, helping you grow and refine your craft with the guidance of someone who's actively navigating the industry.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2- Who reviews the work submitted to Review My Work?</Accordion.Header>
              <Accordion.Body>
                Our reviewers are carefully selected, highly trained professionals who are not just experts in their field but are also actively working in their respective industries. This ensures that the feedback you receive is not only educated but also relevant and up-to-date with current standards and trends.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3- What kind of work can I submit for review?</Accordion.Header>
              <Accordion.Body>
                Review My Work caters to a wide range of creative fields including, but not limited to, visual arts, music composition, writing, and digital media. If you're unsure whether your work fits our categories, feel free to contact us for clarification.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4- How do I submit my work for review?</Accordion.Header>
              <Accordion.Body>
                Submitting your work is easy! Simply create an account on our platform, choose the review tier that best suits your needs, and upload your work following the submission guidelines provided for each category. Once submitted, our professionals will get to work on your review.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>5- What are the different review tiers available?</Accordion.Header>
              <Accordion.Body>
                We offer four main tiers of review: Basic Review, Comprehensive Review, Express Review, and Express Comprehensive Review. Each tier is designed to cater to different needs, from quick insights to in-depth analysis, with varying turnaround times to suit your schedule.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>6- How long does it take to receive feedback?</Accordion.Header>
              <Accordion.Body>
                The turnaround time depends on the review tier you select. Express reviews are completed within 2-3 business days, while comprehensive reviews may take up to 7-10 business days. We strive to deliver insightful feedback in a timely manner, without compromising on quality.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>7- Can I choose my reviewer?</Accordion.Header>
              <Accordion.Body>
                While we don't currently offer the option to choose your specific reviewer, rest assured that all submissions are matched with professionals whose expertise and experience align with the work submitted. This ensures that you receive relevant and meaningful feedback.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>8- What if I'm not satisfied with my review?</Accordion.Header>
              <Accordion.Body>
                We aim for complete satisfaction with every review. If you feel the feedback didn't meet your expectations, please contact us. We offer a review process to address any concerns, ensuring that you receive feedback that is valuable and constructive.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>9- Is my work safe and confidential with Review My Work?</Accordion.Header>
              <Accordion.Body>
                Absolutely. Protecting your intellectual property and maintaining confidentiality is paramount. Your work is only shared with the professional reviewer, and our terms of service ensure that your creations remain yours alone.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>10- How can I get the most out of my review?</Accordion.Header>
              <Accordion.Body>
                To maximize the benefits of your review, we recommend being open to constructive criticism and viewing it as a growth opportunity. Apply the feedback to your work, explore suggested areas for improvement, and don't hesitate to ask follow-up questions if you have our comprehensive review package.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>11- How do I get started?</Accordion.Header>
              <Accordion.Body>
                Getting started is simple! Head over to our website, sign up, and you'll be on your way to getting your work reviewed by a working professional in no time. Remember, "Get your work reviewed by a highly trained, more importantly working professional" is not just our phrase; it's our promise to you.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>12- Can I become a reviewer for Review My Work?</Accordion.Header>
              <Accordion.Body>
                Absolutely! If you're a highly trained professional actively working in your field and have a passion for helping emerging artists and creators refine their craft, we'd love to hear from you. Visit our "Become a Reviewer" page on our website for more information on the qualifications we're looking for and how to apply. We value diversity in expertise and experience to offer our users comprehensive feedback across various creative disciplines.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>13- How does a reviewer get paid?</Accordion.Header>
              <Accordion.Body>
                Reviewers are compensated based on the tier of the review completed and the complexity of the work reviewed. Payments are made monthly through direct deposit or PayPal, depending on your preference. The specific rates and payment structure are detailed during the onboarding process for new reviewers and are designed to fairly compensate our professionals for their time and expertise. For more detailed information about our payment structure, please refer to the reviewer onboarding materials or contact our Reviewer Relations team.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>
      </Container>
    </div>
  )
}

export default Faqs