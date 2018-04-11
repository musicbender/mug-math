import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default (props) => {
  const content = {
    helpText() {
      return (
        <div>
          <p>Although it's debated among roasters, roast development is commonly measured from the time first crack starts until the end of the roast. The longer this window of time is, the higher the roast development percentage is. This can be used to determine if a roast is under or over developed.</p>
          <p>Here's how to use this tool:</p>
          <ul>
            <li>Roast your coffee and take note of your first crack and total roast time</li>
            <li>Click the first crack block to input when your roast's first crack started</li>
            <li>Select the minutes</li>
            <li>Then select the seconds</li>
            <li>Do the same for your total roast time</li>
            <li>Your roast development percentage is automagically calculated</li>
            <li>Drink good coffee!</li>
          </ul>
        </div>
      );
    }
  }

  const actions = {
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
