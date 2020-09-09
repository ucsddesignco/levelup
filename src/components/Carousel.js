import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { Row, Col, Container } from "react-grid-system";

const imgMapping = {
  1: require("../images/zoom/zoom_vooglers.png"),
  2: require("../images/zoom/zoom_valiantvoters.png"),
  3: require("../images/zoom/zoom_kidsnextstore.png"),
  4: require("../images/zoom/zoom_bigdesignenergy.png"),
  5: require("../images/zoom/zoom_4-yelp.png")
};

const createCarouselItemImage = (index, options) => (
  <div key={index}>
    <img src={imgMapping[index]} />
  </div>
);

const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

class ExternalControlledCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      autoPlay: false
    };
  }

  next = () => {
    this.setState(state => ({
      currentSlide: state.currentSlide + 1
    }));
  };

  prev = () => {
    this.setState(state => ({
      currentSlide: state.currentSlide - 1
    }));
  };

  changeAutoPlay = () => {
    this.setState(state => ({
      autoPlay: !state.autoPlay
    }));
  };

  updateCurrentSlide = index => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <p>External slide value: {this.state.currentSlide}</p>
        </div>

        <Row align="center" justify="center">
          <Col xs={1}>
            <button onClick={this.prev}>Prev</button>
            <img
              src={require("../images/zoom/4-yelp_arrow_left.png")}
              onClick={this.prev}
            />
            <p>
                {this.state.currentSlide === 1 && "hello"}
            </p>
          </Col>
          <Col xs={8}>
            <Carousel
              autoPlay={this.state.autoPlay}
              selectedItem={this.state.currentSlide}
              onChange={this.updateCurrentSlide}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              {...this.props}
            >
              {baseChildren.props.children}
            </Carousel>
          </Col>
          <Col xs={1}>
            <button onClick={this.next}>Next</button>
          </Col>
        </Row>
      </div>
    );
  }

  //   render() {
  //     return <div>{baseChildren}</div>;
  //   }
}

export default ExternalControlledCarousel;
