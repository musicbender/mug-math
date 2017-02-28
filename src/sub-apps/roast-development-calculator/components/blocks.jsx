import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import blkIconStyles from '../../../style/components/block-icon-styles';
import '../style/input-blocks.scss';

export default (props) => {
  const { block, changeBlock, name, unit, text, order } = props;
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

  const numAdjust = (direction, e) => {
    setTimeout(() => { props.adjustNum(direction); }, 0);
  }

  const getContent = () => {
    if (notResult()) {
      return (
        <div className="block-div">
          <div className="block-name">{name}</div>
          <div className="block-value-time">
            <TimePicker
              format="24hr"
              hintText="24hr Format"
              value={this.props}
              onChange={this.handleChangeTimePicker24}
            />
          </div>
          <IconButton style={blkIconStyles.plus} iconStyle={blkIconStyles.icon} onClick={(e) => numAdjust(1,e)}>
            <ContentAdd color={iconColor} />
          </IconButton>
          <IconButton style={blkIconStyles.minus} iconStyle={blkIconStyles.icon} onClick={(e) => numAdjust(-1,e)}>
            <ContentRemove color={iconColor} />
          </IconButton>
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
    <div className={`moist-block block brew-${name} ${selected()}`} onClickCapture={(e) => handleClick(e)}>
        {getContent()}
    </div>
  )
}
