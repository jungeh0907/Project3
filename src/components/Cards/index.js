import React from "react";
import "./style.css";
import {Card,CardTitle, Row, Col} from "react-materialize";
import Madridpic from '../../images/madrid.jpg';
import Sydneypic from '../../images/sydney.jpg';
import Cancunpic from '../../images/cancun.jpg';
import Parispic from '../../images/paris.jpg'

function HomeCard1 () {
    return (
        <>
        <Row className="card-container" > 
            <Col s={3} m={3} l={3}>
                <Card  id="card2" className='small'
                header={<CardTitle image={Madridpic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g187514-Madrid-Vacations.html' target="_blank" rel="noopener noreferrer">More info - Madrid</a>]}>
               Try some tapas in Madrid, catch a flamenco show.
                </Card>
            </Col>
            <Col s={3} m={3} l={3}>
            <Card  id="card2" className='small'
                header={<CardTitle image={Sydneypic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g255060-Sydney_New_South_Wales-Vacations.html' target="_blank" rel="noopener noreferrer">More info - Sydney</a>]}>
                Visit the land down under, hop around with the roos.   
             
            </Card>
            </Col>
            <Col s={3} m={3} l={3}>
            <Card  id="card2" className='small'
                header={<CardTitle image={Cancunpic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g150807-Cancun_Yucatan_Peninsula-Vacations.html' target="_blank" rel="noopener noreferrer" >More info - Cancun</a>]}>
                Enjoy some sun and wash away the stress at the beach. 
             
            </Card>
            </Col>
            <Col s={3} m={3} l={3}>
            <Card id="card2" className='small'
                header={<CardTitle image={Parispic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g187147-Paris_Ile_de_France-Vacations.html' target="_blank" rel="noopener noreferrer">More info - Paris</a>]}>
                Explore the city of lights and do as the parisians do.
             
            </Card>
            </Col>
        </Row>
        
      
    
        </>


    );
}


export default HomeCard1;

