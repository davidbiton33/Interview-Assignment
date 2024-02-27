import { Baby } from './';



export interface BabiesResponse {
  success: boolean;
  message: string;
  data?: Baby | Baby[] | undefined
}
