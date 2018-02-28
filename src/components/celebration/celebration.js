import React, { Component } from 'react';

import './celebration.css';

export class Celebration extends Component {
  static defaultProps = {
    list: ['🎈', '🍾', '🎆', '🎉', '👶', '🍼']
  };

  componentDidMount() {
    const { list } = this.props;
    let index = 0;
    this.interval = setInterval(() => {
      if (this.container) {
        this.container.appendChild(this.getEmoji(list[index]));
      }
      index = index + 1 === list.length ? 0 : index + 1;
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shouldComponentUpdate() {
    return false;
  }

  getEmoji(emoji) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const getRandom = max => `${Math.floor(Math.random() * max)}px`;

    const el = document.createElement('span');
    el.className = 'emoji';
    el.innerHTML = emoji;

    [['top', getRandom(height)], ['left', getRandom(width)]].forEach(
      ([property, value]) => {
        el.style[property] = value;
      }
    );

    return el;
  }

  render() {
    return (
      <div className="celebration" ref={node => (this.container = node)} />
    );
  }
}
