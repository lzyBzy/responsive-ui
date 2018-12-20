import * as React from 'react';
import './timeLine.css';
import TimeNode from './TimeNode';
import TimeNodeConnector from './TimeNodeConnector';
import { getTimeLineData } from 'assets/apis/timeLineCall';

type Props = {

};

type State = {
  activeNode: number,
  timeLineData: Array<{time: string, data: string}>,
};

class TimeLine extends React.Component<Props, State> {
  state = {
    timeLineData: [],
  };

  getTheTimeLineData = () => {
    getTimeLineData().then(timeLine => {
      if (timeLine.hasOwnProperty('response')) {
        console.log(timeLine.response.data);
        this.setState({
          timeLineData: timeLine.response.data,
        });
      } else {
        timeLineData: []
      }
    })
  }

  onHoveringNode = (e, data) => {
    console.log(typeof e.target.id);
    this.setState({
      activeNode: parseInt(e.target.id, 10)
    })
  }

  componentDidMount() {
    this.getTheTimeLineData();
  }


  render() {
    const { activeNode, timeLineData } = this.state;
    console.log("rewr"+JSON.stringify(timeLineData));

    return (
      <div className="timeLineDiv">
        <div className="timeLine">
          {
            timeLineData !== undefined && timeLineData !== null && timeLineData.length !== 0
              ? (
                timeLineData.map((timeData, index) => {
                 return(
                   <div key={index} className="eachTimeLine">
                     <TimeNode date={timeData.time} data={timeData.data} id={index} active={index === activeNode} onHoveringNode={this.onHoveringNode} />
                     { timeLineData[index+1] !== undefined
                        ? <TimeNodeConnector howManyDate={timeLineData.length} /> : null
                     }
                   </div>
                 );
                })
              ) : <span>sdd</span>
          }
        </div>
      </div>
    );
  }

}

export default TimeLine;
