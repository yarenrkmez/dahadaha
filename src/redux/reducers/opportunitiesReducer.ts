import { opportunityActions } from "../actionTypes";

const initialState = {
  opportunities: [],
};

const opportunitiesReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case opportunityActions.SET_OPPORTUNITIES:
      return {
        ...state,
        opportunities: action.data,
      };

    default:
      return state;
  }
};

export default opportunitiesReducer;
