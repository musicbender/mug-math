import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default (props) => {
  const content = {
    url: "https://www.washingtonpost.com/news/going-out-guide/wp/2015/08/04/kyoto-cold-brew-coffee-is-good-to-the-last-drop-if-youre-patient/",
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

  return (
    <div>
      <Dialog
        title="How to Use This"
        actions={actions.help}
        modal={false}
        open={props.help}
        autoScrollBodyContent
        onRequestClose={() => props.closeHelp()}
      >
        {content.helpText()}
      </Dialog>
    </div>
  )
}
