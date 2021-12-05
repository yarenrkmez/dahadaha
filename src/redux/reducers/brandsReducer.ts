import { BrandActions } from "../actionTypes";

const initialState = {
  brands: [],
};

const brandsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case BrandActions.SET_BRANDS:
      return {
        ...state,
        brands: action.data,
      };

    default:
      return state;
  }
};

export default brandsReducer;
