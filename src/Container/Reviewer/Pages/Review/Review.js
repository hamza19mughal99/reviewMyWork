import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import './Review.css';
import Input from '../../../../Component/Input/Input';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GiveReview, ReviewerGetAllWork } from '../../../../Redux/Action/reviewer';
import Loader from '../../../../Util/Loader';
import { cloudUrl } from '../../../../Util/Helper';
import { errorNotify, successNotify } from '../../../../Util/Toast';
import SpinLoader from '../../../../Util/SpinLoader';

const Review = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [reviewWork, setReviewWork] = useState({})
  const [submitWork, setSubmitWork] = useState({
    score: 0,
    impression: '',
    attributes: '',
    obsevation: '',
    world: '',
    comment: '',
    question6: ''
  })

  const [impressionWord, setImpressionWord] = useState(0)
  const [attributesWord, setattributesWord] = useState(0)
  const [observationWord, setobservationWord] = useState(0)
  const [worldWord, setworldWord] = useState(0)
  const [commentWord, setcommentWord] = useState(0)
  const [question6Word, setquestion6Word] = useState(0)

  const [planType, setPlanType] = useState('')
  const [questions, setQuestions] = useState([])

  const userFound = JSON.parse(localStorage.getItem('user'))
  const { loading, reviewerGetAllWorkData } = useSelector((state) => state.getNotReviewWork)
  const { loading: postLoading, giveReviewData } = useSelector((state) => state.reviewCreate)

  useEffect(() => {
    if (giveReviewData) {
      const updatedUserFound = { ...userFound, user: { ...userFound.user, reviewRemain: giveReviewData.reviewRemain } };
      localStorage.setItem('user', JSON.stringify(updatedUserFound));

      successNotify(giveReviewData?.message)

      dispatch({ type: "GIVE_REVIEW_RESET" })
      navigate('/reviewer/thankyou')
    }
  }, [giveReviewData])

  useEffect(() => {
    dispatch(ReviewerGetAllWork(userFound?.user?.profession?.professionName))
  }, [])

  useEffect(() => {
    if (reviewerGetAllWorkData) {
      const getWork = reviewerGetAllWorkData?.filter((r) => r._id === id)
      setReviewWork(getWork[0])
      setPlanType(getWork[0].artist.planType.planName)

      if (getWork[0].artist.planType.planName === "Quick Peek") {
        setQuestions([
          'First Impressions: What feelings or ideas does the music evoke when you first listen to it? Which musical element most contributes to this?',
          'Melody and Harmony Analysis: How do the melody and harmony work together? Is there a balance between tension and release?',
          'Rhythmic Structure: How does the rhythm contribute to the overall feel and flow of the piece? Are there any particularly effective uses of rhythm or tempo changes?',
          'Originality and Creativity: What aspects of the composition are most unique or creative? How does the composer’s personal style shine through?',
          'Areas for Growth: Can you suggest specific areas for improvement or exploration in future compositions?',
          'Encouraging Insight: What is the most exciting or compelling aspect of this composition? Encourage continued creativity and exploration.'
        ])
      }
      else if (getWork[0].artist.planType.planName === 'Comprehensive Review') {
        setQuestions([
          'Technical Proficiency: Assess the composer’s technical execution in terms of melody, harmony, rhythm, and dynamics. Where do their strengths lie, and what suggests areas for growth?',
          'Thematic Depth: Explore the themes or stories behind the music. How effectively are they communicated? What underlying messages or emotions are conveyed?',
          'Emotional Engagement: Describe the emotional journey of the piece. How does it connect with and impact the listener?',
          'Innovation and Influence: Identify elements that show innovation or a unique approach. How do these aspects enhance the overall composition?',
          'Contextual Placement: Consider the piece’s place within its musical genre or the broader musical tradition. How does it contribute to, challenge, or expand on existing musical narratives?',
          'Personalized Advancement Plan: Offer a detailed plan or suggestions for the composer’s technical and creative development, based on your analysis.'
        ])
      }
      else if (getWork[0].artist.planType.planName === 'Express Review') {
        setQuestions([
          'Immediate Highlight: What element of the music stands out immediately, and why?',
          'Core Strengths Brief: What are the key strengths of the composition, such as melody, harmony, rhythm, or dynamics?',
          'Swift Improvement Suggestions: Offer one or two quick, actionable suggestions for improvement.',
          "Motivational Note: Provide a brief word of encouragement that acknowledges the composer's effort and potential."
        ])
      }
      else if (getWork[0].artist.planType.planName === "Express Comprehensive Review") {
        setQuestions([
          "Immediate Technical and Creative Impressions: Share your initial thoughts on both the technical and creative aspects of the composition. What stands out?",
          "Concept and Communication: How clearly and effectively is the main idea or emotion of the piece communicated?",
          "Emotional and Intellectual Connection: Describe your immediate emotional or intellectual response to the piece. How does the composition achieve this connection?",
          "Distinctive Features: Identify the most compelling or innovative feature of the composition.",
          "Focused Development Advice: Provide focused advice for the composer’s next steps in both technical skill and creative expression.",
          "Quick Encouragement and Forward Steps: End with positive reinforcement and suggest a specific direction for the composer's next project."
        ])
      }
    }
  }, [reviewerGetAllWorkData])

  const reviewHandler = (e) => {
    e.preventDefault();

    if (planType !== 'Express Review') {
      if (submitWork?.impression.length === 0 ||
        submitWork?.attributes.length === 0 ||
        submitWork?.obsevation.length === 0 ||
        submitWork?.world.length === 0 ||
        submitWork?.score === 0 ||
        submitWork?.comment.length === 0 ||
        submitWork?.question6.length === 0
      ) {
        errorNotify("Please filled up all fields")
        return
      }

      else if (submitWork?.impression.length < 100 ||
        submitWork?.attributes.length < 100 ||
        submitWork?.obsevation.length < 100 ||
        submitWork?.world.length < 100 ||
        submitWork?.comment.length < 100 ||
        submitWork?.question6.length < 100) {
        errorNotify("All fields value must be minimum 100 words")
        return;
      }

      else if (submitWork?.score > 10 || submitWork?.score <= 0) {
        errorNotify("Score must be greater and less/equal to 10")
        return;
      }

    }
    else {
      if (submitWork?.impression.length === 0 ||
        submitWork?.attributes.length === 0 ||
        submitWork?.obsevation.length === 0 ||
        submitWork?.world.length === 0 ||
        submitWork?.score === 0
      ) {
        errorNotify("Please filled up all fields")
        return
      }

      else if (submitWork?.impression.length < 100 ||
        submitWork?.attributes.length < 100 ||
        submitWork?.obsevation.length < 100 ||
        submitWork?.world.length < 100
      ) {
        errorNotify("All fields value must be minimum 100 words")
        return;
      }

      else if (submitWork?.score > 10 || submitWork?.score <= 0) {
        errorNotify("Score must be greater and less/equal to 10")
        return;
      }
    }


    let data = {
      score: submitWork?.score,
      question1: submitWork?.impression,
      question2: submitWork?.attributes,
      question3: submitWork?.obsevation,
      question4: submitWork?.world,
      question5: submitWork?.comment.length > 0 ? submitWork?.comment : '' ,
      question6: submitWork?.question6.length > 0 ? submitWork?.question6: '',
      reviewerId: userFound?.user?._id,
      workId: reviewWork?._id
    }

    dispatch(GiveReview(data))
  }

  return (
    <div className='reviewer_page'>
      <Container>
        <h1>Review Page</h1>

        {
          loading ? <Loader /> : <>

            {
              reviewWork?.fileType === "url" ?
                <div className='d-flex justify-content-center align-items-center'>
                  <a href={reviewWork?.fileUrl} target='_blank' className='live_video'>
                    Click Here to Watch Live Video URL/Link
                    <img src='/images/btn_arrow_img.png' alt='' style={{ width: "35px" }} />
                  </a>
                </div>
                :
                <div className='d-flex justify-content-center align-items-center'>
                  <a href={`${cloudUrl}${reviewWork?.mpFile?.filename}`} target='_blank' className='live_video'>
                    Click Here to Open File
                    <img src='/images/btn_arrow_img.png' alt='' style={{ width: "35px" }} />
                  </a>
                </div>
            }

            <h5>{reviewWork?.fileName}</h5>

            <Form onSubmit={reviewHandler}>
              <div className='d-flex justify-content-center text-center'>
                <Input type={"number"} label={"score (out of 10)"}
                  value={submitWork.score}
                  onChange={(e) => setSubmitWork({
                    ...submitWork,
                    score: e.target.value
                  })}
                />
              </div>

              {/* question1 */}
              <div>
                <Input type={"textarea"}
                  label={questions[0]} rows={3}
                  value={submitWork.impression}
                  onChange={(e) => {
                    setSubmitWork({
                      ...submitWork,
                      impression: e.target.value
                    })
                    setImpressionWord(e.target.value.length)
                  }}
                />
                <p style={impressionWord < 100 ? { color: "red", textAlign: "end" } : { color: "green", textAlign: "end" }}>
                  100/{impressionWord}
                </p>
              </div>

              {/* question2 */}
              <div>
                <Input type={"textarea"} label={questions[1]}
                  rows={3}
                  value={submitWork.attributes}
                  onChange={(e) => {
                    setSubmitWork({
                      ...submitWork,
                      attributes: e.target.value
                    })
                    setattributesWord(e.target.value.length)
                  }}
                />
                <p style={attributesWord < 100 ? { color: "red", textAlign: "end" } : { color: "green", textAlign: "end" }}>
                  100/{attributesWord}
                </p>
              </div>

              {/* question3 */}
              <div>
                <Input type={"textarea"} label={questions[2]} rows={3}
                  value={submitWork.obsevation}
                  onChange={(e) => {
                    setSubmitWork({
                      ...submitWork,
                      obsevation: e.target.value
                    })
                    setobservationWord(e.target.value.length)
                  }}
                />
                <p style={observationWord < 100 ? { color: "red", textAlign: "end" } : { color: "green", textAlign: "end" }}>
                  100/{observationWord}
                </p>
              </div>

              {/* question4 */}
              <div>
                <Input type={"textarea"} label={questions[3]} rows={3}
                  value={submitWork.world}
                  onChange={(e) => {
                    setSubmitWork({
                      ...submitWork,
                      world: e.target.value
                    })
                    setworldWord(e.target.value.length)
                  }
                  }
                />
                <p style={worldWord < 100 ? { color: "red", textAlign: "end" } : { color: "green", textAlign: "end" }}>
                  100/{worldWord}
                </p>
              </div>

              {
                planType !== 'Express Review' &&
                <>
                  {/* question5 */}
                  <div>
                    <Input type={"textarea"} label={questions[4] ? questions[4] : ''} rows={3}
                      value={submitWork.comment}
                      onChange={(e) => {
                        setSubmitWork({
                          ...submitWork,
                          comment: e.target.value
                        })
                        setcommentWord(e.target.value?.length)
                      }}
                    />
                    <p style={commentWord < 100 ? { color: "red", textAlign: "end" } : { color: "green", textAlign: "end" }}>
                      100/{commentWord}
                    </p>
                  </div>

                  {/* question6 */}
                  <div>
                    <Input type={"textarea"} label={questions[5] ? questions[5] : ''} rows={3}
                      value={submitWork.question6}
                      onChange={(e) => {
                        setSubmitWork({
                          ...submitWork,
                          question6: e.target.value
                        })
                        setquestion6Word(e.target.value?.length)
                      }}
                    />
                    <p style={question6Word < 100 ? { color: "red", textAlign: "end" } : { color: "green", textAlign: "end" }}>
                      100/{question6Word}
                    </p>
                  </div>
                </>
              }

              <div className='d-flex justify-content-center'>
                {
                  postLoading ? <SpinLoader /> :
                    <BlackButton type="submit">
                      Submit Review
                      <img src='/images/btn_arrow_img.png' alt='' />
                    </BlackButton>
                }
              </div>
            </Form>
          </>
        }
      </Container>
    </div>
  )
}
export default Review