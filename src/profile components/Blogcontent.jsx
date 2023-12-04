import React from 'react';
import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';  //using boostrap: npm install react-bootstrap bootstrap
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'; // using carousel npm install mdb-react-ui-kit or yarn add mdb-react-ui-kit

import Image2 from '../images/Airport.jpg'
import Image3 from '../images/OIP.jpg'
import Image4 from '../images/OIP (1).jpg'
import AI1 from '../images/AI.jpg'
import AI2 from '../images/AI1.jpg'
import AI3 from '../images/AI2.jpg'


import { Data } from './Data'; 



export default function MainContent(){
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

    return(
        <>
        <section>
            <Container className=''>
                <div className='content'>
                    {ListItems}
                </div>
            </Container>
        </section>
        </>
    )
}