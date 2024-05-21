import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React from 'react';
import img1 from '../images/people1.jpg';
import img2 from '../images/people2.png';
import img3 from '../images/people3.png';
import '../App.css';

function Utility(){
            return (
                <Container className="cards-row"  id = "ourservices">
              <Card className="mx-auto my-4" style={{ width: '21.5rem'}} >
                <Card.Img variant="top" src={img1} className="custom-card" />
                <Card.Body>
                  <Card.Title>Learn New</Card.Title>
                  <Card.Text>
                    Learn new by connecting to your seniors,bosses
                    and friends.
                  </Card.Text>
                  <Button variant="primary" style={{background:"#111"}}>See More</Button>
                </Card.Body>                            
              </Card>

              <Card className="mx-auto my-4" style={{ width: '21.5rem' }} >
                <Card.Img variant="top" src={img2} className="custom-card" />
                <Card.Body>
                  <Card.Title>Connect</Card.Title>
                  <Card.Text>
                    Make connection with talented personalities and enrich 
                    yourself with knowledge.
                  </Card.Text>
                  <Button variant="primary" style = {{background: "#111"}}>See More</Button>
                </Card.Body>                            
              </Card>
              <Card className="mx-auto my-4" style={{ width: '21.5rem' }} >
                <Card.Img variant="top" src={img3} className="custom-card" />
                <Card.Body>
                  <Card.Title>Show up</Card.Title>
                  <Card.Text>
                    Come with new ideas and display them through your posts.
                  </Card.Text>
                  <Button variant="primary" style={{background: "#111"}}>See More</Button>
                </Card.Body>                            
              </Card>
              
       </Container>
               
    


     );
}

export default Utility;