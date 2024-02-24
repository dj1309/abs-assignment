import React from 'react'
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {
    MDBFooter,
    MDBContainer,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
          <MDBContainer className='p-4'>
          <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaFacebookF />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaTwitter />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaGoogle />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaInstagram />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaLinkedinIn />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaGithub />
        </MDBBtn>
      </section>
    
            <section className=''>
              <form action=''>
                <MDBRow className='d-flex justify-content-center'>
                  <MDBCol size="auto">
                    <p className='pt-2'>
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </MDBCol>
    
                  <MDBCol md='5' start>
                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                  </MDBCol>
    
                  <MDBCol size="auto">
                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                      Subscribe
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            </section>
    
            <section className='mb-4'>
              <p>
              Stay updated with the latest news and announcements. Subscribe to our newsletter for exclusive content and offers.
          </p>
            </section>
    
           
          </MDBContainer>
    

        </MDBFooter>
      );
}

export default Footer
