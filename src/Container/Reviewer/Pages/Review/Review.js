import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Review.css';
import Input from '../../../../Component/Input/Input';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GiveReview, ReviewerGetAllWork } from '../../../../Redux/Action/reviewer';
import Loader from '../../../../Util/Loader';
import { cloudUrl } from '../../../../Util/Helper';
import { errorNotify, successNotify } from '../../../../Util/Toast';

const Review = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [reviewWork, setReviewWork] = useState({})
  const [submitWork, setSubmitWork] = useState({
    impression: '',
    attributes: '',
    obsevation: '',
    world: '',
    score: 0,
    comment: ''
  })

  const userFound = JSON.parse(localStorage.getItem('user'))
  const { loading, reviewerGetAllWorkData } = useSelector((state) => state.getNotReviewWork)
  const { loading: postLoading, giveReviewData } = useSelector((state) => state.reviewCreate)

  useEffect(() => {
    if (giveReviewData) {
      successNotify(giveReviewData?.message)
      dispatch({ type: "GIVE_REVIEW_RESET" })
      navigate('/reviewer/thankyou')
    }
  }, [giveReviewData])

  useEffect(() => {
    dispatch(ReviewerGetAllWork())
  }, [])

  useEffect(() => {
    if (reviewerGetAllWorkData) {
      const getWork = reviewerGetAllWorkData?.filter((r) => r._id === id)
      setReviewWork(getWork[0])
    }
  }, [reviewerGetAllWorkData])

  const reviewHandler = (e) => {
    e.preventDefault();

    if (submitWork?.impression.length === 0 ||
      submitWork?.attributes.length === 0 ||
      submitWork?.obsevation.length === 0 ||
      submitWork?.world.length === 0 ||
      submitWork?.score === 0 ||
      submitWork?.comment.length === 0
    ) {
      errorNotify("Please filled up all fields")
      return
    }

    let data = {
      impression: submitWork?.impression,
      attributes: submitWork?.attributes,
      obsevation: submitWork?.obsevation,
      world: submitWork?.world,
      score: submitWork?.score,
      comment: submitWork?.comment,
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
                </div> :
                <div className='react_player'>
                  <ReactPlayer url={`${cloudUrl}${reviewWork?.mpFile?.filename}`} controls={true} />
                </div>
            }

            <h5>{reviewWork?.fileName}</h5>

            <Form onSubmit={reviewHandler}>
              <div>
                <Input type={"textarea"}
                  label={"What is your first impression of the work"} rows={3}
                  value={submitWork.impression}
                  onChange={(e) => setSubmitWork({
                    ...submitWork,
                    impression: e.target.value
                  })}
                />
              </div>
              <div>
                <Input type={"textarea"} label={"What was your impression of the sequencing attribtutes"}
                  rows={3}
                  value={submitWork.attributes}
                  onChange={(e) => setSubmitWork({
                    ...submitWork,
                    attributes: e.target.value
                  })}
                />
              </div>
              <div>
                <Input type={"textarea"} label={"How did the work develop through your obsevation?"} rows={3}
                  value={submitWork.obsevation}
                  onChange={(e) => setSubmitWork({
                    ...submitWork,
                    obsevation: e.target.value
                  })}
                />
              </div>
              <div>
                <Input type={"textarea"} label={"Is this work ready for release in to the world"} rows={3}
                  value={submitWork.world}
                  onChange={(e) => setSubmitWork({
                    ...submitWork,
                    world: e.target.value
                  })}
                />
              </div>
              <div className='d-flex justify-content-center text-center'>
                <Input type={"number"} label={"score (out of 10)"}
                  value={submitWork.score}
                  onChange={(e) => setSubmitWork({
                    ...submitWork,
                    score: e.target.value
                  })}
                />
              </div>
              <div>
                <Input type={"textarea"} label={"Any other comments"} rows={3}
                  value={submitWork.comment}
                  onChange={(e) => setSubmitWork({
                    ...submitWork,
                    comment: e.target.value
                  })}
                />
              </div>
              <div className='d-flex justify-content-center'>
                <BlackButton type="submit">
                  {
                    postLoading ? 'Loading...' : <>
                      Submit Review
                      <img src='/images/btn_arrow_img.png' alt='' />
                    </>
                  }
                </BlackButton>
              </div>
            </Form>
          </>
        }
      </Container>
    </div>
  )
}
export default Review