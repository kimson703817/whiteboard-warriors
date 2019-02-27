import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import React, { Component } from 'react';
import MainHighlight from './MainHighlight';
import ContentListItem from './ContentListItem';
import NewsInfoCarousel from './NewsInfoCarousel';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <div
            style={{ marginBottom: '5%', width: '100%', textAlign: 'center' }}
          >
            <NewsInfoCarousel />
          </div>
          <Row>
            <Col md="4">
              <MainHighlight />
            </Col>
            <Col md="3" style={{ marginLeft: '3%' }}>
              <ContentListItem />
              <ContentListItem />
              <ContentListItem />
            </Col>
            <Col style={{ marginLeft: '1.5rem' }} md="4">
              <Card
                style={{
                  marginLeft: '28%',
                  padding: '3%',
                  textAlign: 'center'
                }}
              >
                <h5>Next Meeting:</h5>
                <div>March 14, 2019</div>
                <div>Guest Speaker: Elon Musk</div>
                <div>Direction</div>
                <img
                  style={{ marginTop: '5%', maxHeight: '12rem' }}
                  src="https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
