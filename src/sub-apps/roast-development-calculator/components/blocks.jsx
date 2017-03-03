import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import blkIconStyles from '../../../style/components/block-icon-styles';
import '../style/input-blocks.scss';

export default (props) => {
  const { block, changeBlock, handleTime, changeTime, name, order, fcTime, totalTime } = props;
  const iconColor = 'rgba(0, 0, 0, 0.42)';

  const handleClick = (e) => {
    if (name !== block) {
      changeBlock(name);
    }
  }

  const selected = () => {
    return name === block ? "selected" : '';
  }

  const handleTimePicker = (event, time) => {
    props.handleTime(time, block);
  }

  const getValue = () => {
     return name === "fcTime" ? fcTime : totalTime;
  }

  return (
    <div className={`rdev-block block rdev-${name} ${selected()}`} onClickCapture={(e) => handleClick(e)}>
      <div className="block-div">
        <div className="block-name">{name}</div>
        <div className="block-value-time">
          <TimePicker
          format="24hr"
          hintText="0:00"
          value={getValue()}
          onChange={handleTimePicker}
        />
        </div>
      </div>
    </div>
  )
}
