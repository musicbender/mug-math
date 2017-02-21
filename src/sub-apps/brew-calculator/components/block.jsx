import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import iconStyles from '../style/icons';

export default (props) => {
  const { mode, block, changeBlock, name, unit, text, order} = props;
  const iconColor = 'rgba(0, 77, 64, 0.9)';

  const handleClick = () => {
    if (notResult()) {
      changeBlock(name);
    }
  }

  const notResult = () => {
    return order !== 2 ? true : false;
  }

  const selected = () => {
    return (name === block && notResult()) ? "selected" : '';
  }

  const numAdjust = (direction) => { props.adjustNum(direction); }

  const getContent = () => {
    if (notResult()) {
      return (
        <div className="brew-block-div">
          <div className="brew-name">{name}</div>
          <div className="brew-value">
            {name === "ratio" ? `1:${props[name]}` : `${props[name]}`}<span className="brew-unit">{unit}</span>
          </div>
          <IconButton style={iconStyles.plus} iconStyle={iconStyles.icon} onClick={() => numAdjust(1)}>
            <ContentAdd color={iconColor} />
          </IconButton>
          <IconButton style={iconStyles.minus} iconStyle={iconStyles.icon} onClick={() => numAdjust(-1)}>
            <ContentRemove color={iconColor} />
          </IconButton>
        </div>
      )
    } else {
        return (
          <div className="brew-block-div">
            <div className="brew-result">
              {name === "ratio" ? `${text} 1:${props[name]}` : `${props[name]}${unit} ${text}`}
            </div>
          </div>
        )
    }
  }

  return (
    <div className={`brew-block-${mode} brew-block brew-${name} ${selected()}`} onClick={() => handleClick()}>
        {getContent()}
    </div>
  )
}
