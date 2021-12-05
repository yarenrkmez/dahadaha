import { apiUrl } from './common/Config';
import { get } from './common/RequestHelper';

type Data={
data:Array<any>;
status:number
}


  
export  function getPromotions(): Data {
      return  get(apiUrl) as any   
  }
  
  