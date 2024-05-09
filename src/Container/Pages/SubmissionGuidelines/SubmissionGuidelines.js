import React, { useEffect } from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Container } from 'react-bootstrap'
import { EditSubmissionGet } from '../../../Redux/Action/EditPages';
import { useDispatch, useSelector } from 'react-redux';
import PleaseWaitLoader from '../../../Util/PleaseWaitLoader';

const SubmissionGuidelines = () => {
  const dispatch = useDispatch();

  const { loading, getSubmissionEditData } = useSelector((state) => state.getSubmissionEdit)

  useEffect(() => {
    dispatch(EditSubmissionGet())
  }, [])

  return (
    <div>
      <Banner heading={"Submission Guidelines"} />

      <Container>
        {
          loading ? <PleaseWaitLoader /> :
            <div className='main_description_wrapper' dangerouslySetInnerHTML={{ __html: getSubmissionEditData?.data[0]?.submissionText }}>
              {/* <h6>Hey There, Creative Genius! 🌟 Here's How to Get Your Work in Front of Our Eyes:</h6>
              <p>We’re all about making this process smooth and easy, so you can spend more time creating and less time clicking through forms. Follow these steps to get your masterpiece from your head to our hands.</p>

              <h6>Step 1: Pick Your Potion 🧪</h6>
              <p>First up, choose your review tier. Not sure which one fits? Take a peek at our Services & Pricing page for the lowdown on what each option offers. Whether it’s a Quick Peek or a Deep Dive, we’ve got you covered.</p>

              <h6>Step 2: Prep Your Piece 🖼️🎼✍️</h6>
              <p>Here’s how to get your work ready for the spotlight:</p>

              <ul className='mb-3'>
                <li>Visual Arts: Please send us a high-resolution JPEG or PNG. Make sure it’s clear, in focus, and does justice to your work.</li>
                <li>Music Compositions: WAV or MP3 formats work best. Ensure the recording is crisp, and we can hear every note as you intended.</li>
                <li>Written Work: A PDF or Word document is perfect. Make sure it’s legible, well-formatted, and free of coffee stains.</li>
              </ul>

              <h6>Step 3: Tell Us Your Story 📖</h6>
              <p>In a few sentences, let us know what inspired your work, what you’re aiming for, and any specific areas you’d like feedback on. This helps us tailor our review to be as helpful as possible.</p>

              <h6>Step 4: Submit and Sit Tight 🚀</h6>
              <p>Once everything’s looking good, hit that submit button! Then, it’s time to sit back, relax, and maybe start your next project? We’ll get to work on your review and have it back to you by the turnaround time of your chosen tier.</p>

              <h6>A Few More Nuggets of Wisdom:</h6>

              <ul className='mb-3'>
                <li>One at a Time: Please submit one piece of work per review. It helps us give each piece the attention it deserves.</li>
                <li>Keep it Clean: We love bold, boundary-pushing work, but please, nothing illegal or that could be considered hate speech. Let’s keep it respectful and inspiring.</li>
                <li>Copyright Stuff: Make sure you own the work or have the rights to it. By submitting, you’re allowing us to review it and share feedback with you. We don’t claim any ownership of your masterpiece.</li>
              </ul>

              <h6>Questions? Quandaries?</h6>
              <p>Got a question that’s not covered here? Our FAQs might have the answer. If not, don’t hesitate to reach out. We’re here to make sure your submission is as smooth as a fresh jar of peanut butter.</p>

              <h6>Ready to take the leap? Your audience awaits. Submit your work, and let’s make something amazing together. 🌈</h6>

              <h5 className='my-4'>Reviewer Requirement</h5>
              <h6>Join Our Crew of Creative Guides! 🌟</h6>
              <p>Are you a seasoned professional in your creative field? Do you get a kick out of helping up-and-coming talent polish their work and shine? If nodding along feels right, you might just be the next star reviewer for Review My Work!</p>

              <p>We're on the hunt for passionate, skilled individuals who are not just masters of their craft but also have a heart for mentorship. Sound like your kind of gig? Let's dive into what it takes:</p>

              <h6>What We’re Looking For:</h6>

              <ul className='mb-3'>
                <li>Pro Status: You're actively working in your field with a portfolio to prove it. Whether you're an artist, musician, writer, or any kind of creative professional, your experience speaks volumes.</li>
                <li>Feedback Superstar: You've got a knack for giving constructive, insightful feedback that can help someone go from good to great.</li>
                <li>Empathy & Encouragement: You remember what it was like starting out. You can deliver honest feedback in a way that motivates and uplifts.</li>
                <li>Commitment to Growth: You're all about continuous learning and staying up-to-date with your industry's latest trends and techniques.</li>
              </ul>

              <h6>The Perks:</h6>
              <ul className='mb-3'>
                <li><span>Flexibility:</span> Review on your schedule. Pick up work as it fits into your busy life.</li>
                <li><span>Compensation:</span> We believe in fairly compensating our reviewers. Details on pay rates will be shared during the application process.</li>
                <li><span>Community:</span> Join a vibrant community of professionals who share your passion for creativity and mentorship.</li>
                <li><span>Impact:</span>  Play a pivotal role in shaping the future of up-and-coming talent. Your insights could be the key to someone's breakthrough.</li>
              </ul>

              <h6>How to Apply:</h6>

              <ul className='mb-3'>
                <li><span>Tell Us About Yourself:</span> Fill out our online application form. Share a bit about your background, your professional journey, and why you’re excited to join us.</li>
                <li><span>Show Off Your Work:</span> Provide links to your portfolio or samples of your work. We love seeing what you've accomplished.</li>
                <li><span>Sample Review:</span> Submit a sample review of a piece in your field (don't worry, we'll provide the piece). This helps us see your feedback style in action</li>
              </ul>

              <p>Ready to make a difference in the creative world? We can't wait to hear from you. Apply now, and let’s start this beautiful collaboration. 🚀</p>

              <h6>Questions?</h6>
              <p>If you've got questions or need more details, shoot us an email at BonjourRMW@gmail.com. We're here to help you through the application process</p>
              <p>Your expertise could be the beacon that guides someone to their next great creation. Join us, and let's illuminate the path together! 💡</p> */}

            </div>
        }
      </Container>
    </div>
  )
}

export default SubmissionGuidelines