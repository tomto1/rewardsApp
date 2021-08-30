import {
  SET_REWARDS,
  COLLECT_REWARDS,
  CLEAR_COLLECT_REWARDS
} from '../actions/rewards';


const initialState = {
  collect: [],
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REWARDS:
      return {
        ...state,
        data: action.data
      };

    case COLLECT_REWARDS:
      return {
        ...state,
        collect: [...state.collect, action.collect]
      };

    case CLEAR_COLLECT_REWARDS:
        console.log("tu sam",{        ...state,
          collect: []})
        return {
        ...state,
        collect: []
      };

    default:
      return state;
  }
}