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
      <div className="description"
      style={{
         visibility: 'visible',
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center'
      }}>
        {
          data
        }
      </div>
      <div className="nodeDate">
        <div id={id} className="activeDot" onMouseOver={(e, data)=> { onHoveringNode(e, data); }}/>
        <span>{date}</span>
      </div>
    </div>
  ) : (
    <div className="date">
      <div className="description" >
        {
          data
        }
      </div>
      <div className="nodeDate">
        <div id={id} className="dot" onMouseOver={(e, data)=> { onHoveringNode(e, data); }}/>
        <span>{date}</span>
      </div>
    </div>
  );
  return element;
}

export default TimeNode;
