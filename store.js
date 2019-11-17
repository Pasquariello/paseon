import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";



const initialState = {};

const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

//export default store;

// const initialState = {
//   // lastUpdate: 0,
//   // light: false,
//   // count: 0,
//   // isAuthenticated: null,
//   // current_user: null
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'TICK':
//       return {
//         ...state,
//         lastUpdate: action.lastUpdate,
//         light: !!action.light
//       }
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     case 'RESET':
//       return {
//         ...state,
//         count: initialState.count
//       }
//     case 'LOGIN':
//       console.log('signed in called')
//       return {
//         ...state,
//         current_user: initialState.current_user
//       }
//     default:
//       return state
//   }
// }

// export const initializeStore = (preloadedState = initialState) => {
//   return createStore(
//     reducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   )
// }