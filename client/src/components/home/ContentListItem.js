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

class ContentListItem extends Component {
  render() {
    return (
      <Row style={{ height: '5rem', marginBottom: '6%' }}>
        <img
          src="https://images.pexels.com/photos/1059116/pexels-photo-1059116.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          className="img-fluid"
          style={{ width: '5rem', height: '5rem' }}
        />
        <Col style={{ height: '5rem' }}>
          <CardTitle>
            <h6>Featured content wassup man we are the best</h6>
          </CardTitle>
          <CardSubtitle>Yorita Yoshino</CardSubtitle>
        </Col>
      </Row>
    );
  }
}

export default ContentListItem;
