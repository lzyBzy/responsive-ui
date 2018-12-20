import * as React from 'react';
import './timeNode.css';

type Props = {
  id: number,
  active: boolean,
  date: string,
  data: string,
  onHoveringNode: () => void,
};

const TimeNode  = (props: Props) => {
  const { id, active, onHoveringNode, date, data } = props;
  const element = active ? (
    <div className="date">
      <div className="description">
         {
           data
         }
      </div>
      <div id={id} className="activeDot" onMouseOver={(e, data)=> { onHoveringNode(e, data); }}/>
      <span>{date}</span>
    </div>
  ) : (
    <div className="date">
      <div id={id} className="dot" onMouseOver={(e, data)=> { onHoveringNode(e, data); }}/>
      <span>{date}</span>
    </div>
  );
  return element;
}

export default TimeNode;
