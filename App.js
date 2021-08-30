import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import rewardsReducer from './store/reducers/rewards';
import RewardsListScreen from './screens/rewardsList'

const rootReducer = combineReducers({
  rewards: rewardsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RewardsListScreen />
    </Provider>
  );
}
