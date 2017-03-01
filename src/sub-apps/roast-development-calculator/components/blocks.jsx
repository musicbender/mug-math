import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import blkIconStyles from '../../../style/components/block-icon-styles';
import '../style/input-blocks.scss';

export default (props) => {
  const { block, changeBlock, handleTime, changeTime, name, unit, text, order } = props;
  const iconColor = 'rgba(0, 0, 0, 0.42)';

  const handleClick = (e) => {
    if (name !== block && notResult()) {
      changeBlock(name);
    }
  }

  const notResult = () => {
    return order !== 2 ? true : false;
  }

  const selected = () => {
    return (name === block && notResult()) ? "selected" : '';
  }

  const handleTimePicker = (event, time) => {
    props.changeTime(time, block);
  }

  const getContent = () => {
    if (notResult()) {
      return (
        <div className="block-div">
          <div className="block-name">{name}</div>
          <div className="block-value-time">
            <TimePicker
              format="24hr"
              hintText="0:00"
              autoOk="true"
              onChange={handleTimePicker}
            />
          </div>
        </div>
      )
    } else {
        return (
          <div className="block-result-div">
            <div className="block-result">
              {`${props[name]}${unit} of mositure loss`}
            </div>
          </div>
        )
    }
  }

  return (
    <div className={`rdev-block block brew-${name} ${selected()}`} onClickCapture={(e) => handleClick(e)}>
        {getContent()}
    </div>
  )
}
