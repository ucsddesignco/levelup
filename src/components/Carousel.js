import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { Row, Col, Container } from "react-grid-system";
import { ShowcaseTeams } from "./ShowcaseTeams";

const imgMapping = {
  1: require("../images/zoom/zoom_vooglers.png"),
  2: require("../images/zoom/zoom_valiantvoters.png"),
  3: require("../images/zoom/zoom_kidsnextstore.png"),
  4: require("../images/zoom/zoom_bigdesignenergy.png"),
  5: require("../images/zoom/zoom_4-yelp.png")
};

const prevArrows = [
  require("../images/zoom/vooglers_arrow_left.png"),
  require("../images/zoom/valiantvoters_arrow_left.png"),
  require("../images/zoom/kidsnextstore_arrow_left.png"),
  require("../images/zoom/bigdesignenergy_arrow_left.png"),
  require("../images/zoom/4-yelp_arrow_left.png")
];

const nextArrows = [
  require("../images/zoom/vooglers_arrow_right.png"),
  require("../images/zoom/valiantvoters_arrow_right.png"),
  require("../images/zoom/kidsnextstore_arrow_right.png"),
  require("../images/zoom/bigdesignenergy_arrow_right.png"),
  require("../images/zoom/4-yelp_arrow_right.png")
];

const createCarouselItemImage = (index, options) => (
  <div key={index} className="carousel-team">
    <img src={imgMapping[index]} />
    <h2>{ShowcaseTeams[index - 1].team_name}</h2>
    <h6>{ShowcaseTeams[index - 1].team_members}</h6>
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
        <Container>
          <Row align="center" justify="center">
            <Col xs={1}>
              <img
                src={prevArrows[this.state.currentSlide]}
                onClick={this.prev}
                className="nav-arrows"
              />
            </Col>
            <Col xs={10} sm={8}>
              <Carousel
                autoPlay={this.state.autoPlay}
                selectedItem={this.state.currentSlide}
                onChange={this.updateCurrentSlide}
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                {...this.props}
              >
                {baseChildren.props.children}
              </Carousel>
            </Col>
            <Col xs={1}>
              <img
                src={nextArrows[this.state.currentSlide]}
                onClick={this.next}
                className="nav-arrows"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  //   render() {
  //     return <div>{baseChildren}</div>;
  //   }
}

export default ExternalControlledCarousel;
