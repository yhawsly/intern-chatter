import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Image2 from '../images/Airport.jpg'
import AI2 from '../images/AI1.jpg'
import Basketball2 from '../images/bas2.jpg'
import Football1  from '../images/football1.webp'
import Image3 from '../images/OIP.jpg'
// you can add more images 

function Carousels() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
      <> 
          <section className="">
              <Container>
                  <Row>
                      <Col >
                        <div className="content-carousel">
                          <Carousel responsive={responsive} infinite={true}>

                             <div class="card">
                                <div class="image"><img src={AI2} className='d-block w-100' alt='...' /></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                              </div>


                            {/* ***************************************************************************** */}
                              <div class="card">
                                <div class="image"><img src={Image2} className='d-block w-100' alt='...' /></div> {/* This is for the card img  */}
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />          {/* This is for the card profile image */}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>  


                                {/* ***************************************************************************** */}
                              <div class="card">
                                <div class="image"><img src={Football1} className='d-block w-100' alt='...' /></div>  {/* This is for the card img  */}
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2 } className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>  


                                {/* ***************************************************************************** */}
                              <div class="card">
                                <div class="image"><img src={Image3} className='d-block w-100' alt='...' /></div>  {/* This is for the card img  */}
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>  


                                {/* ***************************************************************************** */}
                              <div class="card">
                                <div class="image"><img src={Basketball2} className='d-block w-100' alt='...' /></div>{/* This is for the card img  */}
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>  


                                {/* ***************************************************************************** */}
                              <div class="card">
                                <div class="image"><img src={Football1} className='d-block w-100' alt='...' /></div>{/* This is for the card img  */}
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>  


                                {/* ***************************************************************************** */}   {/* This is for the card img  */}
                              <div class="card">
                                <div class="image"><img src={Football1} className='d-block w-100' alt='...' /></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>  



                                {/* ***************************************************************************** */}
                              <div class="card">
                                <div class="image"><img src={Football1} className='d-block w-100' alt='...' /></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>  


                                {/* ***************************************************************************** */}
                              <div class="card">
                                <div class="image"><img src={Football1} className='d-block w-100' alt='...' /></div>
                                  <div class="content">
                                    <a href="#">
                                      <span class="title">
                                      <img src={Image2} className='d-block w-60' alt='...' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      </span>
                                    </a>

                                    <p class="desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <a class="action" href="#">
                                      Find out more
                                      <span aria-hidden="true">
                                        →
                                      </span>
                                    </a>
                                  </div>
                                </div>  


                                                    {/* you can add more when you copy and past  the card section */}
                          </Carousel>
                        </div>   
                      </Col>
                    
                  </Row> 
              </Container>
          </section>   
     </>
  ) 
}
export default Carousels

