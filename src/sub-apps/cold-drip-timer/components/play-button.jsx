import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AVPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AVPause from 'material-ui/svg-icons/av/pause';
import '../style/play-button.scss';

export default (props) => {
  let playStateIcon = props.playing ? <AVPause /> : <AVPlayArrow />;

  return (
    <div className="play-button-div">
      <FloatingActionButton backgroundColor="white" disableTouchRipple={true} onClick={() => props.click()}>
        {playStateIcon}
      </FloatingActionButton>
    </div>
  )
}
