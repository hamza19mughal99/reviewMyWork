import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../../../Component/Banner/Banner'
import { useDispatch, useSelector } from 'react-redux';
import { EditCopyRightGet } from '../../../Redux/Action/EditPages';
import PleaseWaitLoader from '../../../Util/PleaseWaitLoader';

const Copyright = () => {
    const dispatch = useDispatch();

    const { loading, getCopyRightEditData } = useSelector((state) => state.getCopyRightEdit)

    useEffect(() => {
        dispatch(EditCopyRightGet())
    }, [])

    return (
        <div>
            <Banner heading={"Copyright Notice"} />

            <Container>
                {
                    loading ? <PleaseWaitLoader /> :
                        <div className='main_description_wrapper' dangerouslySetInnerHTML={{ __html: getCopyRightEditData?.data[0]?.copyRightText }}>
                            {/* <h6>Our Copyright Notice 📝✨</h6>
                            <p>Hey there, creative soul! Before you dive deep into all the amazing stuff we've got here at Review My Work, we've got a little bit of legal housekeeping to share. Don't worry, we'll keep it light and easy to get through!</p>

                            <h6>The Basics:</h6>
                            <p>Everything you see here on our site – from the sparkling words to the eye-catching design, and yes, even this incredibly friendly copyright notice – is owned by us (unless noted otherwise). That means all the content, graphics, logo, and all the creative goodies are under our wing, protected by copyright laws far and wide.</p>

                            <h6>What's Yours is Yours:</h6>
                            <p>When you submit your work for review, breathe easy knowing your rights are intact. Your creations remain 100% yours. We're just here to give feedback and help you shine brighter. We don’t claim ownership over any of your stuff – promise</p>

                            <h6>Sharing is Caring, But...:</h6>
                            <p>We absolutely love it when you share our content, but let's make it a win-win. If you're sharing stuff from our site (like our insightful articles or heartwarming testimonials), just make sure to give us a shout-out or a link back. It's all about spreading the love while respecting the work that goes into creating something special.</p>

                            <h6>Using Our Site Content:</h6>
                            <p>Fancy something you've seen on our site? Our content is here to inspire and assist you on your creative journey. However, using our content for anything other than personal use needs a thumbs-up from us. Reach out, and let's chat about how you'd like to use it.</p>

                            <h6>The No-No List:</h6>
                            <p>While we're all for creativity and expression, there are a couple of things we've got to say a firm no to – anything illegal, offensive, or that infringes on someone else’s rights. Let's keep our community positive, respectful, and inspiring!</p>

                            <h6>Let's Talk:</h6>
                            <p>Got a question about what you can and can't do with the content you find here? Or maybe you've spotted something of yours on our site that shouldn't be there? Reach out to us at [Insert Contact Information]. We're here to help and make things right</p>

                            <h6>In a Nutshell:</h6>
                            <p>We're here to create a space where creativity flourishes, and that means respecting each other's work and rights. Thanks for being a part of our community and for treating the content, both yours and ours, with love and respect.</p>
                            <p>Also I would like to have a place for this perhaps when the artist about to submit there work - they have to agree to this. please make this in to a page too.</p> */}
                        </div>
                }
            </Container>
        </div>
    )
}

export default Copyright