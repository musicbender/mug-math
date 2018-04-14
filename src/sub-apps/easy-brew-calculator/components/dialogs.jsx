import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default (props) => {
  const content = {
    helpText() {
      return (
        <div>
          dialog
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
