import { Container, Row, Col } from 'reactstrap';

import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src:
      'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    captionHeader: '#1 in the nation',
    captionText:
      'We helped many people learn the fundamental to become employable'
  },
  {
    src:
      'https://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg',
    captionHeader: 'We helped over 4000 graduates find the first job',
    captionText: 'Be part of an open community'
  },
  {
    src: 'https://www.samoa.travel/Content/SiteResources/PAGE/372/culture1.jpg',
    captionHeader: 'Guest Speaker Jeff Bezos will make an appearance in May',
    captionText: 'Making the world a better place'
  }
];

class NewsInfoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  slides = items =>
    items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} style={{ width: '60rem', height: '30rem' }} />
          <CarouselCaption
            captionText={item.captionText}
            captionHeader={item.captionHeader}
          />
        </CarouselItem>
      );
    });

  render() {
    const { activeIndex } = this.state;
    return (
      <Carousel
        next={this.next}
        previous={this.previous}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {this.slides(items)}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default NewsInfoCarousel;
