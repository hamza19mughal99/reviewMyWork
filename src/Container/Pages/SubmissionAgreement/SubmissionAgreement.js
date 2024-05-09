import React, { useEffect } from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { EditAgreementGet } from '../../../Redux/Action/EditPages';
import PleaseWaitLoader from '../../../Util/PleaseWaitLoader';

const SubmissionAgreement = () => {
  const dispatch = useDispatch();

  const { loading, getAgreementEditData } = useSelector((state) => state.getAgreementEdit)

  useEffect(() => {
    dispatch(EditAgreementGet())
  }, [])

  return (
    <div>
      <Banner heading={"Submission Agreement"} />

      <Container>
        {
          loading ? <PleaseWaitLoader /> :
            <div className='main_description_wrapper' dangerouslySetInnerHTML={{__html: getAgreementEditData?.data[0]?.agreementText}}>
              {/* <h5>Submission Agreement for Review My Work</h5>
              <h6>Hey there, Creative Soul!</h6>

              <p>Before you send us your masterpiece to sprinkle some of our constructive magic on, there are a few important things we need to chat about – just to make sure we’re all on the same page. This agreement helps keep things smooth and clear, so we can focus on what really matters: making your work shine.</p>

              <h6>1. What You’re Giving Us</h6>
              <p>When you submit your artwork, music, writing, or any form of creative genius to us, you’re basically allowing us to:</p>

              <ul>
                <li>Check it out: Obviously, we need to see/hear/read your work to review it.</li>
                <li>Talk about it: We’ll discuss your work internally with our team of reviewers – always respectfully and with the aim of providing valuable feedback.</li>
                <li>Show it off (a little): Sometimes, we might want to highlight standout submissions (like yours) on our platform to celebrate your talent and show the world what kind of amazing work our community creates. We’ll always get your okay before doing this.</li>
              </ul>

              <h6 className='mt-3'>2. Your Rights</h6>
              <p>Let’s make this crystal clear – you own your work. Full stop. Submitting your work to us doesn’t change that. You’re just giving us permission to review it and possibly showcase it on our platform with your consent.</p>

              <h6>3. What We Promise</h6>

              <ul>
                <li>Respect: Your work is your baby. We get it. We promise to treat it with the care and respect it deserves.</li>
                <li>Confidentiality: Your submission stays between us. We won’t sell it, share it, or let it wander off into the wild web.</li>
                <li>Feedback: We’re here to give you honest, constructive feedback to help you grow. That’s the goal.</li>
              </ul>

              <h6 className='mt-3'>4. The Fine Print</h6>

              <ul>
                <li>Accuracy: You confirm that the work you’re submitting is yours – you created it, you own it, or you have permission to use it in this way.</li>
                <li>No Take-backs: Once you submit your work, we’re assuming you’re okay with us reviewing it based on the terms laid out here.</li>
                <li>Be Cool: Please don’t send us anything that could be considered offensive, illegal, or that infringes on someone else’s rights. Let’s keep it positive and respectful.</li>
              </ul>

              <h6 className='mt-3'>5. Saying Goodbye</h6>
              <p>If you decide you want to remove your submission from our platform or if you don’t want us to use it in any way, just let us know. We’ll respect your wishes, no questions asked.</p>

              <h6>Ready to Submit?</h6>

              <p>By submitting your work to Review My Work, you’re agreeing to this Submission Agreement. It’s our way of making sure everyone knows what’s what, so we can all focus on the fun part – celebrating and improving your creative work.</p>

              <p>Questions? Concerns? Just want to say hi? Reach out to us anytime. We’re here for you.</p> */}
            </div>
        }
      </Container>
    </div>
  )
}

export default SubmissionAgreement