import { BrandActions } from "../actionTypes";

const initialState = {
  brands: [],
  filterBrand: 0
};

const brandsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BrandActions.SET_BRANDS:
      return {
        ...state,
        brands: action.data,
      };
    case BrandActions.SET_FILTER_BRAND:
      return {
        ...state,
        filterBrand: action.data,
      };
    default:
      return state;
  }
};

export default brandsReducer;
