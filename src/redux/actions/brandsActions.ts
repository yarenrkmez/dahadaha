import { BrandActions } from "../actionTypes";

export const setBrands= (data:any) => ({
  type: BrandActions.SET_BRANDS,
  data,
});

export const setFilterBrands= (data:any) => ({
  type: BrandActions.SET_FILTER_BRAND,
  data,
});