import React, { useEffect } from 'react'
import Banner from '../../../Component/Banner/Banner'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { EditServicesGet } from '../../../Redux/Action/EditPages';
import PleaseWaitLoader from '../../../Util/PleaseWaitLoader';

const Services = () => {
  const dispatch = useDispatch();

  const { loading, getServiceEditData } = useSelector((state) => state.getServiceEdit)

  useEffect(() => {
    dispatch(EditServicesGet())
  }, [])

  return (
    <div>
      <Banner heading={"Services / Pricing"} />

      <Container>
        {
          loading ? <PleaseWaitLoader /> :
            <div className='main_description_wrapper'>
              <div dangerouslySetInnerHTML={{ __html: getServiceEditData?.data?.topText }}></div>

              <Row style={{ gap: "15px 0" }}>
                {
                  getServiceEditData?.data?.serviceDetail?.map((sd) => {
                    return (
                      <Col md={6}>
                        <div className='wrapper_pricing_box' dangerouslySetInnerHTML={{ __html: sd?.text }}></div>
                      </Col>
                    )
                  })
                }
              </Row>
              <div className='mt-4' dangerouslySetInnerHTML={{ __html: getServiceEditData?.data?.BottomText }}></div>
            </div>
        }
      </Container>
    </div>
  )
}

export default Services