import React from 'react';
import cat from '../../assets/img/cat.jpg';

export default class Neko extends React.Component {
  render() {
    return (
      <div>
        <h2>Neko</h2>
        <img width='512px' src={ cat } alt='' />
      </div>
    );
  }
}
