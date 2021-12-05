import { BrandActions } from "../actionTypes";

export const setBrands= (data:any) => ({
  type: BrandActions.SET_BRANDS,
  data,
});
