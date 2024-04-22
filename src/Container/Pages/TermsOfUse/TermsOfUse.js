import React from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Container } from 'react-bootstrap'

const TermsOfUse = () => {
  return (
    <div>
      <Banner heading={"Terms Of Use"} />

      <Container>
        <div className='main_description_wrapper'>
          <h6>Our Terms of Service</h6>
          <p>Hey there, creative spirit! Welcome to Review My Work. Before you dive into all the awesome services we offer, we’ve got some important ground rules to go over. Think of this as the map that guides our journey together - a bit less formal but just as essential.</p>

          <h6>Accepting These Terms</h6>
          <p>By using our site, submitting your incredible work, or signing up to be one of our revered reviewers, you’re saying, “Yep, I got this, and I agree!” If there’s anything you’re not cool with, reach out to us before getting started.</p>

          <h6>Your Stuff & Our Platform</h6>

          <ul>
            <li><span>Your Work:</span> When you submit your work, you own all the rights to it - full stop. What you’re doing is giving us a thumbs up to share it with our reviewers for feedback purposes only.</li>
            <li>Feedback & Reviews: The advice and insights you get? That’s for you and only you. Keep it under your hat because it’s tailored specifically to your work, based on our reviewers' expertise.</li>
          </ul>

          <h6>Be Cool</h6>

          <ul>
            <li>Play Nice: Use our platform in the way it was intended - to grow, learn, and be inspired. No funny business, like trying to hack us or spamming other users.</li>
            <li> Stay Original: Only submit work that’s yours or you have permission to use. No borrowing without consent!</li>
          </ul>
          
          <h6>Membership & Termination</h6>

          <ul>
            <li>Joining Us: When you create an account, keep your login details secret. You’re responsible for your account and all the activity on it.</li>
            <li>Saying Goodbye: If you ever want to leave us (we’ll miss you!), you can close your account. On our end, we reserve the right to suspend or end your access if we need to protect our community or if you’re not playing by the rules.</li>
          </ul>

          <h6>Changes to Our Services</h6>
          <p>The world’s always changing, and so will our services. We’ll always aim to give you a heads up about any big changes, especially if they might affect how you use Review My Work.</p>

          <h6>Legal Bits</h6>

          <ul>
            <li>Liability: We’re here to provide a platform for feedback, but we can’t accept liability for any losses or damages resulting from our services, the feedback provided, or your use of the platform.</li>
            <li>Disputes: If we ever get into a disagreement, let’s try to work it out like adults. We’ll do our best to resolve any issues directly with you.</li>
            
          </ul>

          <h6>Talk to Us!</h6>
          <p>Got questions, concerns, or need some clarification? Reach out. We’re here to help make your experience as awesome as possible.</p>

          <p>Thanks for being here! Let’s make some magic together.</p>
        </div>
      </Container>
    </div>
  )
}

export default TermsOfUse