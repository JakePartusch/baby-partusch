import React, { Component } from 'react';

import './celebration.css';

export class Celebration extends Component {
  static defaultProps = {
    list: ['🎈', '🍾', '🎆', '🎉', '👶', '👦', '👪', '🍼', '💙']
  };

  componentDidMount() {
    const { list } = this.props;
    let index = 0;
    this.interval = setInterval(() => {
      if (this.container) {
        this.container.appendChild(this.getEmoji(list[index]));
      }
      index = index + 1 === list.length ? 0 : index + 1;
    }, 100);
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

    el.style.transform = `translate3d(${getRandom(width)}, ${getRandom(
      height
    )}, 0)`;

    return el;
  }

  render() {
    return (
      <div className="celebration" ref={node => (this.container = node)} />
    );
  }
}
