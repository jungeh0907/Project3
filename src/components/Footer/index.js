import React from "react";
import "./style.css";
import { Container, Row, Col, Icon } from "react-materialize"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="">
          <Col s={3} m={3} l={3}>
            <div><h5 className="knowUs"><b>Get to know me <Icon>expand_more</Icon></b> </h5></div>
            <div className="link"><a href="https://github.com/jungeh0907" target="_blank" rel="noopener noreferrer" className="text">Jason Jung</a></div>
          </Col>
          <Col s={3} m={3} l={3}>
            <div><h5 className="usefulLink"><b>Useful Links <Icon>expand_more</Icon></b> </h5></div>
            <div className="link"><a href="https://www.groupon.com/coupons/events/travel" target="_blank" rel="noopener noreferrer" className="text">Coupon</a></div>
            <div className="link"><a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/" target="_blank" rel="noopener noreferrer" className="text">Travel Advisory</a></div>
            <div className="link"><a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html" rel="noopener noreferrer" target="_blank" className="text">Country Information</a></div>
            <div className="link"><a href="https://www.weather.gov/" target="_blank" className="text" rel="noopener noreferrer">Weather Advisory</a></div>
          </Col>
          <Col s={3} m={3} l={3}>
            <div><h5 className="knowUs"><b>Connect With Us <Icon>expand_more</Icon></b></h5></div>
            <div className="link"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text">Instagram</a></div>
            <div className="link"><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text">Twitter</a></div>
            <div className="link"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text">Facebook</a></div>
          </Col>
          <Col s={3} m={3} l={3}>
            <div><h5 className="knowUs"><b>Web Navigation <Icon>expand_more</Icon></b></h5></div>
            <div className="link"><a href="/" className="text">Home</a></div>
            <div className="link"><a href="/flight" className="text">Flight</a></div>
            <div className="link"><a href="/place" className="text">Place</a></div>
            <div className="link"><a href="/dining" className="text">Dining</a></div>
          </Col>
        </Row>
        <hr></hr>
        <Row id = "Bottom">
          <Col s={6} m={6} l={6}>
            <p className="copyRight">© Copyright Jason Jung 2019</p>
          </Col>
          <Col s={3} m={3} l={3}>
            <p ><a className="footerTerm" href="/"><u>Terms of Use</u></a></p>
          </Col>
          <Col s={3} m={3} l={3}>
            <p><a className="footerTerm" href="/"><u>Privacy Policy</u></a></p>
          </Col>
        </Row>

      </Container>
    </footer>

  );
}
export default Footer
