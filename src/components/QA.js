import React from "react";

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleFAQ = this.handleFAQ.bind(this);
  }

  handleFAQ() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  render() {
    return (
      <div className="faq-item">
        <div className={ this.state.isToggleOn ? "q active" : "q" } onClick={ this.handleFAQ }>
          <p>{this.props.question}</p>
        </div>
        <div className={ this.state.isToggleOn ? "a-show" : "a-hidden" }>
          <p style={{ marginLeft: "4rem" }} dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.answer) }}/>
        </div>
      </div>
    );
  }
}

export default QA;