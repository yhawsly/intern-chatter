import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image2 from '../img/Airport.jpg'
import Image3 from '../img/OIP.jpg'
import Image4 from '../img/OIP (1).jpg'
import AI1 from '../img/AI.jpg'
import AI2 from '../img/AI1.jpg'
import AI3 from '../img/AI2.jpg'

import { Data } from './Data'; 
import { Container,Row,Col } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const ProfilePage = () => {
  const ListItems = Data.map((data) => (
    <Row key={data.id}>
        <Col xs={12} md={6} xl={5} >
            <div className="content-image">
                <MDBCarousel showControls showIndicators>
                    <MDBCarouselItem itemId={1}>
                        <img src={data.contentImage1} className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                        <img src={data.contentImage2} className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                        <img src={data.contentImage3} className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>

        </Col>

        <Col xs={12} md={6} xl={7}>
                        <div className="">
                            <div className="content-title">
                                <h3><u>{data.contentHeader}</u></h3>
                            </div>
                            <br></br>
                            <div className="content-info">
                                <h6>{data.contentInfor}</h6>
                                <h6 className='Content-Date'>{data.publishedDate}</h6><br/>
                            </div>
                            
                        </div>
                   </Col>
                   
             <hr /><br/><br/><br/>
    </Row>
    
));
  return (
    <div className="sm:flex h-screen lg:overflow-hidden">
      <div className="lg:flex-1/3 lg:overflow-y-auto">
        <div className="w-[363.30px] h-[921.90px] relative">
          <div className="w-[363.30px] h-[921.90px] left-0 top-0 absolute">
            <div className="w-[363.30px] h-[233.10px] left-0 top-[20px] absolute bg-black bg-opacity-60" />
            <img
              className="w-[218.40px] h-[218.40px] left-[50px] top-[114.25px] absolute rounded-full"
              src="https://via.placeholder.com/218x218"
              alt="Profile"
            />
            {/* Add similar tags for other profile elements */}
          </div>
          <p className="font-bold  text-black text-5xl pl-4 mt-5 absolute top-[320px] left-[63.25px]">Elyn Bliss</p>
          <span className="font-normal text-black  text-lg pl-8 absolute top-[420.20px] left-[93.25px]">@elynbliss</span>
          <button className="bg-009A9D text-white px-5 py-1 rounded-lg absolute top-[460px] left-[125px]">
              Follow
            </button>
          <div className="pl-[15px] pr-[15px] pt-[8.40px] pb-[0px] left-0 top-[500px] absolute justify-end items-center inline-flex">
            <div className="w-[327.50px] h-[42.48px] relative">
              <div className="left-0 top-[17.48px] absolute text-black text-[21px] font-medium font-roboto">
                Followers
              </div>
              <div className="left-[123.25px] top-[17.48px] absolute text-black text-[21px] font-medium font-roboto">
                Following
              </div>
              <div className="left-[26.67px] top-0 absolute text-black text-[21px] font-normal font-roboto">
                105
              </div>
              <div className="left-[155.44px] top-0 absolute text-black text-[21px] font-normal font-roboto">
                15
              </div>
              <div className="left-[273.17px] top-0 absolute text-black text-[21px] font-normal font-roboto">
                10
              </div>
              <div className="left-[246.50px] top-[17.48px] absolute">
                <span className="text-black text-[21px] font-normal font-roboto"> </span>
                <span className="text-black text-[21px] font-medium font-roboto">
                  Viewers
                </span>
              </div>
            </div>
          </div>
          <div className="w-[363.30px] h-[343.35px] left-0 top-[550px] absolute">
            <div className="w-[97.74px] left-[129.22px] top-[24.85px] absolute text-black text-[21px] font-medium font-roboto">
              About Me
            </div>
            <div className="w-[325.50px] h-[135.45px] left-[14.70px] top-[59.85px] absolute text-black text-lg font-normal font-roboto">
              Passionate news navigator with 10 years in journalism. I uncover stories
              that transcend headlines, offering a front-row seat to the theater of
              life. Join me on a quest for truth and nuance as we explore the
              ever-evolving world of news together.
            </div>
            <div className="left-[61.95px] top-[284.20px] absolute text-black text-base font-normal font-roboto">
              Ohio - US State
            </div>
            <div className="left-[61.95px] top-[320px] absolute text-black text-base font-normal font-roboto">
              joined 20th July 2020
            </div>
            {/* Add similar tags for other images */}
            <div className="left-[22.05px] top-[369.20px] absolute">
              <span className="text-black text-[21px] font-normal font-roboto">
                Follow
              </span>
              <span className="text-black text-base font-normal font-roboto"> </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex-1 h-full lg:overflow-y-auto relative">
        {/* Content for the second div */}
        <h3 className="font-bold text-3xl pl-4 mt-5 absolute left-[22.05px] top-[50px] lg:left-[22.05px] lg:top-[0px]">Posted Articles <br /><span className="pl-20 mt-5">6</span><hr /> </h3>
        <p className="pl-4 mt-5 absolute left-[22.05px] top-[70px] lg:left-[22.05px] lg:top-[100px]"> 
        <>
        <section>
            <Container className=''>
                <div className='content'>
                    {ListItems}
                </div>
            </Container>
        </section>
        </>
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
