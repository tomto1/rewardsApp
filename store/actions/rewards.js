export const SET_REWARDS = 'SET_REWARDS';
export const COLLECT_REWARDS = 'COLLECT_REWARDS';
export const CLEAR_COLLECT_REWARDS = 'CLEAR_COLLECT_REWARDS'

export const fetchRewards = () => {
  return async dispatch => {
    // any async code you want!
    const response = await fetch(
      'https://staging.helloagain.at/api/v1/clients/5189/bounties/'
    );

    const resData = await response.json();
  
    dispatch({ type: SET_REWARDS, data: resData });
  };
};

export const addReward = reward => {
  return {
    type: COLLECT_REWARDS,
    collect: reward
  };
}

export const clearRewards = () => {
  return {
    type: CLEAR_COLLECT_REWARDS
  };
}