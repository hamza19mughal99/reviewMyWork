import React from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <div>
      <Banner heading={"Services / Pricing"} />

      <Container>
        <div className='main_description_wrapper'>
          <h6>Our Menu of Magic: Services & Pricing 🎩✨</h6>
          <p>Hey, creative soul! Ready to give your work the spotlight it deserves? You're in the right spot! Whether you're just dipping your toes or diving deep into the creative pool, we've got something for everyone. Let's break down the goods:</p>

          <Row style={{gap: "15px 0"}}>
            <Col md={6}>
              <div className='wrapper_pricing_box'>
                <h5>🚀 Quick Peek</h5>
                <ul>
                  <li>What's the deal? Perfect for when you want a fast, professional once-over. It's like having a coffee with a friend who gives you the straight-up truth about your work.</li>
                  <li>What you get: Quick insights on your main vibe, a pat on the back for what you’re rocking, and a nudge in the right direction.</li>
                  <li>Turnaround: Expect it in 14-20 days.</li>
                  <li>Price: <span>$45</span> – A small price for a big step forward.</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className='wrapper_pricing_box'>
                <h5>🎨 Comprehensive Review</h5>
                <ul>
                  <li>What's the deal? This is where we roll up our sleeves and really get into it. Ideal for when you’re ready to take your work from "good" to "mind-blowing."</li>
                  <li>What you get: An in-depth analysis covering everything from technique to emotional impact, with actionable advice tailored just for you.</li>
                  <li>Turnaround: Give us 14-20 days to really marinate in your masterpiece.</li>
                  <li>Price: <span>$85</span> – Investment in your art is an investment in yourself.</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className='wrapper_pricing_box'>
                <h5>⚡ Express Review</h5>
                <ul>
                  <li>What's the deal? In a creative hurry? This is your fast pass to feedback city. </li>
                  <li>What you get: All the insightful goodness of a Quick Peek, but faster than you can say "deadline."</li>
                  <li>Turnaround: Lightning speed! Just 3-5 days.</li>
                  <li>Price: <span>$100</span> – Because sometimes, time is of the essence</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className='wrapper_pricing_box'>
                <h5>🌟 Express Deep Dive</h5>
                <ul>
                  <li>What's the deal? Got a big moment coming up? This is the red-carpet treatment for your work, with all the depth of our Deep Dive, at the speed of light.</li>
                  <li>What you get: Comprehensive critique with express delivery, so you can make your big splash, stat.</li>
                  <li>Turnaround: Super swift, 3-5 days tops.</li>
                  <li>Price: <span>$125</span> – Fast track your way to fabulous.</li>
                </ul>
              </div>
            </Col>
          </Row>

          <h6 className='mt-4'>Ready to Shine? 🌈</h6>
          <p>Picking the right package is like choosing the perfect outfit for your art—it’s gotta fit just right. Not sure which to choose? Hit us up! We’re here to help match you with the perfect review service for where you’re at and where you want to be.</p>
        
          <h6>The Fine Print 📝</h6>
          <ul>
            <li> No hidden fees. The price you see is the price you pay.</li>
            <li>Satisfaction guarantee. Not vibing with the feedback? Let’s chat and make it right.</li>
            <li>Secure payments. Your hard-earned cash is safe with us.</li>
          </ul>

          <p>Life’s too short for mediocre. Let’s make your work unforgettable. Submit now and let the magic begin!</p>
        </div>
      </Container>
    </div>
  )
}

export default Services