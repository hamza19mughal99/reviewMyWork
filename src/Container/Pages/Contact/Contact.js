import React, { useEffect } from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { EditContactGet } from '../../../Redux/Action/EditPages';
import PleaseWaitLoader from '../../../Util/PleaseWaitLoader';

const Contact = () => {
  const dispatch = useDispatch();

  const { loading, getContactEditData } = useSelector((state) => state.getContactEdit)

  useEffect(() => {
    dispatch(EditContactGet())
  }, [])

  return (
    <div>
      <Banner heading={"Contact Us"} />

      <Container>
        {
          loading ? <PleaseWaitLoader /> :
            <div className='main_description_wrapper' dangerouslySetInnerHTML={{__html: getContactEditData?.data[0]?.contactText}}>
              {/* <h5 className='mb-4'>Let's Chat! 🎨✉️</h5>
              <p>Got a masterpiece brewing and need some guidance? Curious about how our review magic works? Or maybe you’re a seasoned pro looking to join our reviewer squad? Whatever’s on your mind, we’re all ears!</p>

              <h6>Get in Touch</h6>
              <p>Review My Work thrives on connections, creativity, and caffeine. So, whether you’ve got questions, feedback, or just want to share your latest creative breakthrough, we’re here for it.</p>

              <h6>Drop Us a Line</h6>

              <p><span>Email: hello@reviewmywork.co</span> Shoot us an email anytime. We’re pretty quick with replies, aiming to get back to you within 24 hours!</p>

              <h5 className='my-4'>Follow Us</h5>

              <h6>Social Media:</h6>
              <p><span>Instagram: @ReviewMyWork_</span> Dive into our daily dose of inspiration, tips, and community highlights. Plus, it’s a great way to slide into our DMs.</p>

              <h5>FAQs</h5>
              <p>Got a quick question? Our FAQ page might just have the answer you’re looking for! Check it out for instant insights.</p>

              <h6>Join the Conversation</h6>
              <p>We’re more than just a review platform; we’re a community. Join our Forum to connect with fellow creators, share your work, and exchange ideas. Who knows? You might just find your next collaborator (or coffee buddy)!</p>

              <h6>We’re Here to Help 🚀</h6>
              <p>At Review My Work, your voice matters. Whether it’s a raving review, a burning question, or a bit of constructive criticism, we’re open to it all. Let’s make this journey together, one creative leap at a time.</p> */}
            </div>
        }
      </Container>
    </div>
  )
}

export default Contact