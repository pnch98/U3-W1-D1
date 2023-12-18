import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.imgSrc} alt={this.props.alt} width={this.props.width} height={this.props.height} />;
  }
}

export default ImageComponent;
