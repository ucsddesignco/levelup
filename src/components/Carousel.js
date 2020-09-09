import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

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
          <button onClick={this.prev}>Prev</button>
          <button onClick={this.next}>Next</button>
        </div>
        <Carousel
          autoPlay={this.state.autoPlay}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          {...this.props}
        >
          {baseChildren.props.children}
        </Carousel>
      </div>
    );
  }

  //   render() {
  //     return <div>{baseChildren}</div>;
  //   }
}

export default ExternalControlledCarousel;
