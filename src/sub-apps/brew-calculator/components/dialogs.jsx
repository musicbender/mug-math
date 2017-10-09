import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default (props) => {
  const content = {
    helpText() {
      return (
        <div>
          <p>The water to coffee ratio determaine how much extraction of the coffee will occur and, in turn, effect how "strong" the flavor of the coffee is. The golden ratio is 1 coffee to 16 water; although, this is a good gernal guideline and there are expeptions to this ratio. Start at 1:16 and change the ratio based on your taste. </p>
          <p>Here's how to use this tool:</p>
          <ul>
            <li>Select a tab of what variable you are tryin to find: ratio, water amount, or coffee amount</li>
            <li>Click one of the blocks that you want to change</li>
            <li>Change the value with the keypad</li>
            <li>You can do small incremental changes with the plus/minus signs in the blocks</li>
            <li>Every time you change the value, it is automagically calculated below</li>
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
