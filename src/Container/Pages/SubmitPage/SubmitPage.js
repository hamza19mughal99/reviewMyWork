import React from 'react';
import './FileSubmit.css';
import { Container } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';

const SubmitPage = () => {
    const navigate = useNavigate();
    return (
        <div className='file_submit_main'>
            <Container>
                <h1>Submission Page</h1>
                <h6>(allow 3 working weeks for this) All of our reviewers are
                    individuals who are working in the field. We would like to
                    give them ample time for a thorough review</h6>

                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <BlackButton style={{ padding: "11px 35px" }} onClick={() => navigate('/artist/form-submit')}> Submit
                        <img src='/images/btn_arrow_img.png' alt='' /> </BlackButton>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                    at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                    delenit augue duis dolore te feugait nulla facilisi.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                    at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                    delenit augue duis dolore te feugait nulla facilisi.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                    at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                    delenit augue duis dolore te feugait nulla facilisi.
                    <br />
                    <br />
                </p>
            </Container>
        </div>
    )
}

export default SubmitPage