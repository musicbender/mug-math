import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
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

  const handleToggle = () => {
    const sweetspot = props.sweetspot;
    if (sweetspot) {
      props.offsweetspot();
    } else if (!sweetspot) {
      props.onsweetspot();
    }
  }

  const handleDialog = () => {
    props.openDialog();
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
            <MoreVertIcon/>
          </IconButton>
        }
        targetOrigin={{horizontal: 'right',vertical: 'top'}}
        anchorOrigin={{horizontal: 'right',vertical: 'top'}}
      >
        <MenuItem
          disableTouchRipple
          primaryText={
            <Toggle
              className="sweetspot-toggle"
              label="Sweet Spot"
              style={style.toggle}
              toggled={props.sweetspot}
              onToggle={() => handleToggle()}
            />
          }
        />
        <MenuItem
          onTouchTap={() => handleDialog()}
          primaryText="What is Cold Drip Coffee?"
        />
        <MenuItem
          onTouchTap={() => handleHelp()}
          primaryText="Help"
        />
      </IconMenu>
      <Dialogs
        dialog={props.dialog}
        help={props.help}
        closeDialog={props.closeDialog}
        closeHelp={props.closeHelp} />
    </div>
  )
};
