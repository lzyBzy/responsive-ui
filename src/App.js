import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeLine from 'screenComponents/TimeLine';

class App extends React.Component<Props, State> {
  render() {
    return (
      <TimeLine />
    );
  }
}

export default App;
