import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default (props) => {
  const style = {
    color: "rgba(255, 255, 255, 0.6)",
    toggle: {
      padding: '12px 0 0'
    }
  }

  const content = {
    url: "https://www.washingtonpost.com/news/going-out-guide/wp/2015/08/04/kyoto-cold-brew-coffee-is-good-to-the-last-drop-if-youre-patient/",
    text() {
      return (
        <div>
          <p>Cold drip coffee, known as Kyoto or slow drip cold brew, is the process of making cold brew coffee one drip at a time. This is possible using the drip tower devices that regulate the drip interval of the water that drops onto the coffee bed. It can take 10-24 hours to complete a bull batch, but oh is it worth it for that smooth and full flavor.</p>
        </div>
      );
    },
    helpText() {
      return (
        <div>
          <ul>
            <li>Move the slider to change your desired drip rate</li>
            <li>The slower the drip rate, the stronger the coffee!</li>
            <li>Press the play button</li>
            <li>Use the sound to sync it with the drips of your drip device</li>
            <li>Remember to recalibrate every hour until your brew is done!</li>
          </ul>
        </div>
      );
    }
  }

  const actions = {
    dialog: [
      <FlatButton
        label="Learn More"
        primary={true}
        onTouchTap={() => window.open(content.url,"_blank")}
      />,
      <FlatButton
        label="Got it!"
        primary={true}
        onTouchTap={() => props.closeDialog()}
      />
    ],
    help: [
      <FlatButton
        label="Got it!"
        primary={true}
        onTouchTap={() => props.closeHelp()}
      />
    ]

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
    <IconMenu touchTapCloseDelay={0}
      iconButtonElement={
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
      <Dialog
        title="What is Cold Drip Coffee?"
        actions={actions.dialog}
        modal={false}
        open={props.dialog}
        onRequestClose={() => props.closeDialog()}
      >
        {content.text()}
      </Dialog>
      <Dialog
        title="How to Use This"
        actions={actions.help}
        modal={false}
        open={props.help}
        onRequestClose={() => props.closeHelp()}
      >
        {content.helpText()}
      </Dialog>
    </IconMenu>
  )
};
