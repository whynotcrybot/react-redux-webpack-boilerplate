import React      from 'react';
import Navigation from 'components/Navigation';

export default class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
          <Navigation/>
          { children }
      </div>
    );
  }
}
