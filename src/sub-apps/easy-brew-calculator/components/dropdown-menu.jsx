import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialogs from './dialogs.jsx';

export default (props) => {
  const style = {
    color: "rgba(255, 255, 255, 0.6)",
    toggle: {
      padding: '12px 0 0'
    }
  }

  const handleHelp = () => {
    props.openHelp();
  }

  return (
    <div>
      <IconMenu
        touchTapCloseDelay={500}
        iconButtonElement=
        {
          <IconButton iconStyle={style}>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{horizontal: 'right',vertical: 'top'}}
        anchorOrigin={{horizontal: 'right',vertical: 'top'}}>
        <MenuItem
          onTouchTap={() => handleHelp()}
          primaryText="Help"
        />
      </IconMenu>
      <Dialogs {...props} />
    </div>
  )
};
