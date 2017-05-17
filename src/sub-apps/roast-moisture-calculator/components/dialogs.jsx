import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default (props) => {
  const content = {
    helpText() {
      return (
        <div>
          <p>When you roast a coffee bean, it loses its internal moisture. A good measure of how far coffee has been roasted is to find out how much moisutre was lost in the roasting process. We do this by weighing the coffee before roast, weighing it afterwards, and calculating the difference. This tool will calculate that difference for you and tell you the percentage of weight loss. Many roasters aim for between 12% to 20% moisture loss.</p>
          <p>Here is how to use this tool</p>
          <ul>
            <li>Weigh your unroasted coffee</li>
            <li>Click the "preweight" block and change the value with the keypad</li>
            <li>Roast your coffee!</li>
            <li>Weight your roasted coffee</li>
            <li>Click the "postweight" block and change the value</li>
            <li>You can do small incremental changes with the plus/minus signs in the blocks</li>
            <li>Every time you change the value, it is automagically calculated below</li>
            <li>Write down you results and adjust your roast as needed</li>
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
        onRequestClose={() => props.closeHelp()}
      >
        {content.helpText()}
      </Dialog>
    </div>
  )
}
