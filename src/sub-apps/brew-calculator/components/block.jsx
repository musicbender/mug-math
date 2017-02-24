import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import blkIconStyles from '../../../style/components/block-icon-styles';
import '../../../style/components/input-blocks.scss';

export default (props) => {
  const { block, changeBlock, name, unit, text, order } = props;
  const iconColor = 'rgba(0, 77, 64, 0.9)';

  const handleClick = (e) => {
    if (name !== block && notResult()) {
      // e.stopPropagation();
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
    setTimeout(() => {
      props.adjustNum(direction);
    }, 0);
  }

  const getContent = () => {
    if (notResult()) {
      return (
        <div className="block-div">
          <div className="block-name">{name}</div>
          <div className="block-value">
            {name === "ratio" ? `1:${props[name]}` : `${props[name]}`}<span className="block-unit">{unit}</span>
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
              {name === "ratio" ? `${text} 1:${props[name]}` : `${props[name]}${unit} ${text}`}
            </div>
          </div>
        )
    }
  }

  return (
    <div className={`brew-block block brew-${name} ${selected()}`} onClickCapture={(e) => handleClick(e)}>
        {getContent()}
    </div>
  )
}
