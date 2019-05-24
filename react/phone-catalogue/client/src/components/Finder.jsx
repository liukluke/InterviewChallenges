import {createStore} from 'redux';

const initialState = {
    phones: []
};

const store = createStore((state = initialState, action = {}) => {
  switch(action.type){
    case 'FIND_ALL':
      return {
        ...state,
        phones: action.payload
      }
    default:
      return state;
  }
});

export default store;