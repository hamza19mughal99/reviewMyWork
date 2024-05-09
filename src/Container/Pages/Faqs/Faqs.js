import React, { useEffect } from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Container, Accordion } from 'react-bootstrap'
import { EditFaqGet } from '../../../Redux/Action/EditPages';
import { useDispatch, useSelector } from 'react-redux';
import PleaseWaitLoader from '../../../Util/PleaseWaitLoader';

const Faqs = () => {
  const dispatch = useDispatch();

  const { loading, getFaqEditData } = useSelector((state) => state.getFaqEdit)

  useEffect(() => {
    dispatch(EditFaqGet())
  }, [])

  return (
    <div>
      <Banner heading={"FAQS"} />

      <Container>
        {
          loading ? <PleaseWaitLoader /> :
            <div className='main_description_wrapper'>

              <h5 className='mb-3'>{getFaqEditData?.data?.heading}</h5>

              <Accordion defaultActiveKey={0}>
                {
                  getFaqEditData?.data?.questionAns.map((qa, i) => {
                    return (
                      <Accordion.Item eventKey={i}>
                        <Accordion.Header>{i + 1}- {qa.question}</Accordion.Header>
                        <Accordion.Body>
                          {qa.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    )
                  })
                }
              </Accordion>

            </div>
        }
      </Container>
    </div>
  )
}
export default Faqs