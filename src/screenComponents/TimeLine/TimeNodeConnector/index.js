import * as React from 'react';
import './timeNodeConnector.css';

type Props = {
  active: boolean,
  howManyDate: number,
};

const TimeNodeConnector  = (props: Props) => {
  const { howManyDate } = props;
  console.log(`${80/howManyDate+1}vw`);
  return <hr className="connector" />;
}

export default TimeNodeConnector;
