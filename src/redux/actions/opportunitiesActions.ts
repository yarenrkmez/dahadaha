import { opportunityActions } from "../actionTypes";

export const setOpportunities = (data:any) => ({
  type: opportunityActions.SET_OPPORTUNITIES,
  data,
});
