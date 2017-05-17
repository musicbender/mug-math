import { black, grey900, grey700, grey500, grey100, white } from 'material-ui/styles/colors';

const initColor = 'rgb(40,40,40)';

const muithemeStyle = {
  palette: {
    primary1Color: black,
    primary2Color: grey900,
    primary3Color: grey500,
    accent1Color: black,
    accent2Color: grey100,
    accent3Color: grey500,
    pickerHeaderColor: grey700,
  },
  appBar: {
    height: 45,
    shadow: "none",
    color: black,
  },
  tabs: {
    color: black,
  },
  tab: {
    color: black,
  },
  slider: {
    handleColorZero: 'transparent',
    handleFillColor: initColor,
    handleSize: 20,
    selectionColor: initColor,
    rippleColor: initColor,
  },
  userAgent: 'all',
}

export default muithemeStyle;
