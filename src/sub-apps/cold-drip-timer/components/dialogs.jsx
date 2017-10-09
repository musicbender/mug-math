import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default (props) => {
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

  return (
    <div>
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
        autoScrollBodyContent
        onRequestClose={() => props.closeHelp()}
      >
        {content.helpText()}
      </Dialog>
    </div>
  )
}
