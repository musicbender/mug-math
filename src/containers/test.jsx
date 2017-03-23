// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from '../reducers';
//
// console.log('loading initial state from server');
// //
// // const preloadedState = window.__PRELOADED_STATE__;
// //
// // delete window.__PRELOADED_STATE__;
//
// const store = createStore(reducers);
// 
// class Test extends Component {
//   componentDidMount() {
//     console.log(window);
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Woohoo!</h1>
//       </div>
//     );
//   }
// }
//
// if(typeof window !== 'undefined') {
//   ReactDOM.render(
//     <Provider store={store}>
//       <Test />
//     </Provider>,
//     document.getElementById('app')
//   );
// } else {
//   console.log("can't find window object...not in browser");
// }
//
//
//
// export default Test;
