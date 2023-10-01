import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';

 function Footer() {
  return (
    <MDBFooter className='text-center' color='white' style={{ backgroundColor : '#565387' }}>
      <MDBContainer className='p-2'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ backgroundColor: '#3b5998' }}>
            <InstagramIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ backgroundColor: '#55acee' }}>
            <TwitterIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ backgroundColor: '#dd4b39' }}>
          <GoogleIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ backgroundColor: '#ac2bac' }}>
            <FacebookIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ backgroundColor: '#0082ca' }}>
           <LinkedInIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ backgroundColor: '#333333' }}>
            <GitHubIcon/>
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-3'>
                  <strong>Get The Latest News & Updates On Your Box</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='Enter Your Email Address..' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4' style={{ marginTop : '10px' }}>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow >
            <MDBCol md="1" lg="4" xl="3" className='mx-auto mb-1'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                MR Learning
              </h6>
              <p>
              Learn from anywhere, anytime, and get personalized attention from experienced instructors.Our accredited courses are designed to help you develop the skills you need to advance your career and connect with a community of learners.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Courses</h6>
              <p>
              <Link  className="nav-link" to="/Service">Web Development</Link>
              </p>
              <p>
              <Link  className="nav-link" to="/Service">React</Link>
              </p>
              <p>
              <Link  className="nav-link" to="/Service">Data Science</Link>
              </p>
              <p>
              <Link  className="nav-link" to="/Service">Art</Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
              <Link  className="nav-link active" aria-current="page"  to="/">Home</Link>
              </p>
              <p>
              <Link  className="nav-link" to="/Service">Service</Link>
              </p>
              <p>
              <Link  className="nav-link" to="/About">About</Link>
              </p>
              <p>
              <Link   className="nav-link" to="/Register">Contact</Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <LocationOnIcon style={{height:'20px', width:'20px' }}/>
                765 Ahmedabad RD
              </p>
              <p>
                <EmailIcon style={{height:'20px', width:'20px' }}/>
                mansi58@gmail.com
              </p>
              <p>
                <LocalPhoneIcon style={{height:'20px', width:'20px' }}/> +91 0123456789
              </p>  
              <p>
              <LocalPhoneIcon style={{height:'20px', width:'20px' }}/> +91 0123456789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: 
        <a className='text-white' href='https://mdbootstrap.com/'>
          MRLearning.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;