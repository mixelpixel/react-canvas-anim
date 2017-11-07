import React, { Component } from 'react';
import './App.css';

/*
 *AnimCanvas
 */
class AnimCanvas extends Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 0;
  }

  componentDidMount() {
    let canvas1 = this.refs.canvas1;
    let ctx = canvas1.getContext('2d');

    ctx.beginPath();
    ctx.arc(250, 150, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#00ff00';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#ffff00';
    ctx.stroke();

    requestAnimationFrame(this.draw.bind(this));
  }

  draw(timestamp) {
    let canvas1 = this.refs.canvas1;
    let ctx = canvas1.getContext('2d');
    /* this gets all the image data */
    let imageData = ctx.getImageData(0, 0, this.props.width, this.props.height);
    let pixels = imageData.data;

    let width = this.props.width

    // pretending a one dimensional array is 2d
    function drawPixel(x, y, r, g, b) {
      let index = ((y * width) + x) * 4;
      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 0xff;
    }

    // /* Manipulate the data */
    // drawPixel(10, 10, 0, 0xff)

    /* Manipulate the data */

    this.x += 50 * 0.03;
    // if (this.x % 500 === 0) {
    //   this.y += 1;
    //   this.x = 0;
    // }
    drawPixel(this.x + 5, this.y, 0, 0xff)


    // pixels[502*4 + 0] = 0xff;
    // pixels[502*4 + 1] = 0x00;
    // pixels[502*4 + 2] = 0x00;
    // pixels[502*4 + 3] = 0xff;

/*  Pixel0:
      pixels[0]: Red
      pixels[1]: Green
      pixels[2]: Blue
      pixels[3]: Alpha
    Pixel1:
      pixels[4]: Red
      pixels[5]: Green
      pixels[6]: Blue
      pixels[7]: Alpha
*/

    /* put the image data */
    ctx.putImageData(imageData, 0, 0);

    // requestAnimationFrame(this.draw.bind(this));
  }

  render() {
    return <canvas ref="canvas1" width={this.props.width} height={this.props.height} />
  }
}

/*
 *App
 */
class App extends Component {
  render() {
    return (
      <AnimCanvas width={500} height={300} />
    );
  }
}

export default App;
