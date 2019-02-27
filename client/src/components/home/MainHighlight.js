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

class MainHighlight extends Component {
  render() {
    return (
      <Card>
        <CardImg src="https://images.pexels.com/photos/1059116/pexels-photo-1059116.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        <CardTitle>
          <h4>Featured content wassup man</h4>
        </CardTitle>
        <CardSubtitle>
          Hi, these people code good, please hire, check out this project.
          Yoshino
        </CardSubtitle>
      </Card>
    );
  }
}

export default MainHighlight;
