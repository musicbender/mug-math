import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default (props) => {
  const style = {
    color: "rgba(255, 255, 255, 0.6)",
    toggle: {
      padding: '12px 0 0'
    }
  }
  const links = {
    kyoto: "https://www.washingtonpost.com/news/going-out-guide/wp/2015/08/04/kyoto-cold-brew-coffee-is-good-to-the-last-drop-if-youre-patient/"
  }

  return (
    <IconMenu touchTapCloseDelay={0}
      iconButtonElement=
      {<IconButton iconStyle={style}><MoreVertIcon/></IconButton>}
          targetOrigin={{horizontal: 'right',vertical: 'top'}}
          anchorOrigin={{horizontal: 'right',vertical: 'top'}}>
        <MenuItem
          onTouchTap={() => window.open(links.kyoto,"_blank")}
          primaryText="What is Cold Drip Coffee?" />
    </IconMenu>
  )
};