import React, { useState, setShow, Component } from 'react';
import { CardDeck, Navbar, NavLink, Col, Row, Image, Container, Card, CardImg, CardBody, CardText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../App.css';
import ItemModal from './ItemModal.js';

class Header extends Component {
  render() {
    return (
      <div>
      <h1> &nbsp;</h1>
      <h1> &nbsp;</h1><h1> &nbsp;</h1>
      <h3 className="animacion" >LISTEN</h3>{'\n'}
      <br />
      </div>)
  }
};


<iframe src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
class ArtistsPage extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        artists: [
          { id: 1, name: 'Rainbow Road', img:require("../assets/images/PHYSIS02.jpg"),
          showModal: false, info:"Rainbow Road",
          content: '"Rainbow Road" is a single made for dancing. Art: @valentinaherrera.exe - Support on Bandcamp and Stream in Spotify and Itunes .',
          linkfb:"https://wastedfates.bandcamp.com/track/rainbow-road", 
          linkig:"https://music.apple.com/mx/album/rainbow-road/1511704798?i=1511704799&l=en", 
          linksp:"https://open.spotify.com/track/7CZlIakxCI8j9kvU6aVNsS",
          spotify:"https://open.spotify.com/embed/album/6eZUGkwQD5C3km2RgIsS1R" },
          { id: 2, name: 'Energy Around Us', img:require("../assets/images/PHYSIS01.jpg"), showModal: false, info: "Energy Around Us",
          content: '"Energy Around Us" are 2 compositions that invite us to a moment of inner and outer reflection.',
          linkfb:"https://wastedfates.bandcamp.com/album/energy-around-us", 
          linkig:"https://music.apple.com/mx/album/energy-around-us/1511563941?i=1511563946&l=en", 
          linksp:"https://open.spotify.com/artist/1wA3nwZy9EriceVVQlEmEx?si=aqVF9wB8RRiRiGJY_eq20g",
          spotify: "https://open.spotify.com/embed/album/4YrEEbMhKkELiM0nh7Zk0T" },
          { id: 3, name: 'Illuminations', img:require("../assets/images/PHYSIS03.jpg"), showModal: false, info: "Illuminations",
          content: 'Illuminations is a 2 track New Age album intended for meditation and relaxation.',
          linkfb:"https://wastedfates.bandcamp.com/album/illuminations", 
          linkig:"https://music.apple.com/mx/album/illuminations/1506940826?l=en", 
          linksp:"https://open.spotify.com/artist/5qfISwWNd9LH2hrEh6oanq?si=ylkY6aw0TKanFqZ_5enljw",
          spotify: "https://open.spotify.com/embed/album/4T4zkkS0B8bK58XMtfESPl"
         },
        ],
      }
      this.handleItemChange = this.handleItemChange.bind(this)
    }
  
    handleModalHide() {
      return () => {
        let { artists } = this.state
        artists = artists.map(item => ({
          ...item,
          showModal: false,
        }))
        this.setState({ artists })
      }
    }
  
    handleModalShow() {
      return e => {
        e.preventDefault()
  
        this.setState({ showModal: true })
      }
    }
  
    handleEditItem(selectedItem) {
      return e => {
        e.preventDefault()
        let { artists } = this.state
        artists = artists.map(item => ({
          ...item,
          showModal: selectedItem.id === item.id,
        }))
        this.setState({ artists })
      }
    }
  
    handleItemChange(itemId) {
      return e => {
        let { artists } = this.state
        artists = artists.map(item => {
          if (item.id === itemId) {
            item[e.target.name] = e.target.value
          }
          return item
        })
        this.setState({ artists })
      }
    }
  
    render() {
      const { artists } = this.state
      return (
        <div>
          <Header />
          <Container className="container">
          <Row className="row">
          <Col>
              {artists.map((item, index) => (
                <Card className="col-xs-12 col-sm-12"
                style={{ width:'auto', textAlign:'center', border: 'none', backgroundColor: 'rgba(0,0,0,0.0)' }} 
                key={index}>
                  <Card.Img  onClick={this.handleEditItem(item)} variant="top" src={item.img} style={{maxWidth:'600px', margin:'0 auto'}} />
                  <Card.Body style={{textAlign:'center'}}><h3 className="animacion"> {item.info}</h3><h1>&nbsp;</h1>
                 
                  </Card.Body>
                </Card>
              ))}
              </Col>
              </Row>
              </Container>
          
          
          {artists.map((item, index) => (
            <ItemModal
            
              key={item.id}
              show={item.showModal}
              onHide={this.handleModalHide()}
              onItemChange={this.handleItemChange}
              item={item}
              backdrop="static"
              keyboard={false}
              centered
              size="lg"
              style={{backgroundColor:'rgba(0,0,0,0.0)'}}
            />
          ))}
        </div>
      )
    }
  };

  export default ArtistsPage;
  