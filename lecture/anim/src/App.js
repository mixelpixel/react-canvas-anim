import React, { Component } from 'react';
import './App.css';

/*
 *AnimCanvas
 */
class AnimCanvas extends Component {
  constructor(props) {
    super(props);
    this.x = 0;
  }

  componentDidMount() {
    requestAnimationFrame(this.draw.bind(this));
  }

  draw(timestamp) {
    let canvas1 = this.refs.canvas1;
    // console.log('canvas1', canvas1);
    /* get graphics context */
    let ctx = canvas1.getContext('2d');

    ctx.beginPath();
    ctx.arc(this.x, 150, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#00ff00';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#ffff00';
    ctx.stroke();

    this.x += 50 * 0.03;
    if (this.x > 500) { this.x = 0; }

    requestAnimationFrame(this.draw.bind(this));
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
