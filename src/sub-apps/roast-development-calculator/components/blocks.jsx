import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import blkIconStyles from '../../../style/components/block-icon-styles';
import pickerStyles from '../style/time-picker';
import '../style/input-blocks.scss';

export default (props) => {
  const { block, changeBlock, handleTime, name, text, fcTime, totalTime } = props;
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
    <div className={`rdev-block rdev-${name} block stacked ${selected()}`} onClickCapture={(e) => handleClick(e)}>
      <div className="block-div">
        <div className="block-name">{text}</div>
        <div className="block-value time">
          <TimePicker
            className="time-picker"
            format="24hr"
            hintText="minutes : seconds"
            autoOk
            value={getValue()}
            style={pickerStyles.style}
            textFieldStyle={pickerStyles.textFieldStyle}
            onChange={handleTimePicker}
          />
        </div>
      </div>
    </div>
  )
}
