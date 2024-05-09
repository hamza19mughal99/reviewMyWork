import React, { useEffect } from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { EditPrivacyGet } from '../../../Redux/Action/EditPages';
import PleaseWaitLoader from '../../../Util/PleaseWaitLoader';

const PrivacyPolicy = () => {
  const dispatch = useDispatch();

  const { loading, getPrivacyEditData } = useSelector((state) => state.getPrivacyEdit)

  useEffect(() => {
    dispatch(EditPrivacyGet())
  }, [])

  return (
    <div>
      <Banner heading={"Privacy Policy"} />

      <Container>
        {
          loading ? <PleaseWaitLoader /> :
            <div className='main_description_wrapper' dangerouslySetInnerHTML={{ __html: getPrivacyEditData?.data[0]?.privacyText }}>
              {/* <h6>Our Promise to Keep Your Stuff Safe 🛡</h6>
              <p>Updated: 2024</p>

              <p>Hey there! Thanks for hanging out with us at Review My Work. Your trust means everything, so we're super transparent about how we handle the info you share while exploring our creative universe. Here's the lowdown on how we look after your details:</p>

              <h6>The Scoop on What We Collect</h6>

              <ul>
                <li><span>The Basics:</span> When you sign up, submit your awesome work, or just reach out to say hi, we might ask for your name, email, and other bits and pieces to make sure we can get back to you or know whose work we're admiring.</li>
                <li><span>Your Masterpieces:</span> All the details about the art or projects you share with us.</li>
                <li><span>Sneaky Tech Stuff:</span> Just like a curious cat, our website keeps an eye on how you navigate our space (think IP addresses and browser types). Don't worry, it's all pretty standard and helps us make your experience better.</li>
              </ul>

              <p className='mt-3'>Why We're Collecting</p>

              <ul>
                <li>To make our service as cool and useful as possible for you.</li>
                <li>To chat with you about your submissions or any questions you have.</li>
                <li>To geek out over data and figure out how to improve.</li>
                <li>To do the legal dance when we need it</li>
              </ul>

              <h6 className='mt-3'>Sharing Is Caring, But Not Too Much</h6>
              <p>We're not in the business of selling your personal deets. We might share some anonymous, big-picture kind of info with our partners to help make our world a better place for creators, but we'll keep your personal stuff personal.</p>

              <h6>Keeping Your Info Under Lock and Key</h6>
              <p>We take the security of your info seriously. We use all the digital equivalent of locks, alarms, and safe boxes to keep your details safe from the baddies.</p>

              <h6>Cookie Monster</h6>
              <p>Yep, we use cookies – those digital crumbs that remember your preferences and make your visits smoother. You can tell your browser to kick them out if you want, but hanging out with us might not be as fun.</p>

              <p>You've Got the Power</p>
              <p>Want to see what info we've got on you, or make it vanish? Just hit us up. You're in control.</p>

              <p>Change Is the Only Constant</p>
              <p>We might tweak this page now and then to keep it fresh and relevant. Check back occasionally to stay in the loop.</p>

              <h6>Questions, Comments, Love Letters?</h6>
              <p>If you're curious about something or want to tell us how much you love what we're doing (or not), drop us a line at:</p>

              <p><span>BonjourRMW@gmail.com</span></p> */}
            </div>
        }
      </Container>
    </div>
  )
}

export default PrivacyPolicy