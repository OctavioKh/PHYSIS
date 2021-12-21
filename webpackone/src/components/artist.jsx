import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';

import {CardDeck, Navbar, NavLink, Col, Row, Image, Container, Card, CardImg, CardBody, CardText } from 'react-bootstrap';
import artists from "../pages/artists.jsx";

const artist = ({artists}) => {
    return ( 
<Fragment>
<CardDeck>
  <Card style={{ width: 'auto', border: 'none' }} id={artist.id}>
  <Card.Img variant="top" src={artist.img} />
  <Card.Body>
  <Button className="nombres" style={{ fontSize: '2rem', fontFamily:'MyFont', fontWeight:'bold'}} variant="light">{}</Button>
   <Card.Text>
    
  </Card.Text>
  </Card.Body>
</Card>
</CardDeck>


</Fragment>
        );
      }

export default artist; 
