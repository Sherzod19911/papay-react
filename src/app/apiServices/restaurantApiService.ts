import axios from "axios";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { serverApi } from "../../lib/config";
import { Restaurant } from "../../css/types/user";
import { SearchObj } from "../../css/types/others";


class RestaurantApiService {
    private readonly path: string;
    constructor () {
        this.path = serverApi;
    }
 async getTopRestaurants () {
       try {
            const url = "/restaurants?order=top&page=1&limit=4",
            result = await axios.get(this.path + url, { withCredentials: true });
        console.log("1");
         console.log("url::", url);
         console.log("result::", result);
         assert.ok(result, Definer.general_err1);     
        
           // console.log("state:",  result.data.state);
            const top_restaurants: Restaurant [] = result.data.data;
            return top_restaurants;
        }catch(err: any) {
            console.log(`error::::getTopRestaurants: ${err.message}`);
            throw err;

        }    
    }

    async getRestaurants (data: SearchObj) {
        try {
             const url = `/restaurants?order=${data.order}&page=${data.page}&limit=${data.limit}`,
             result = await axios.get(this.path + url, { withCredentials: true });
         //console.log("data:", data);
          //console.log("url::", url);
          //console.log("result::", result);
          assert.ok(result, Definer.general_err1);     
         
            // console.log("state:",  result.data.state);
             const restaurants: Restaurant [] = result.data.data;
             return restaurants;
            
         }catch(err: any) {
             console.log(`error::::getRestaurants: ${err.message}`);
             throw err;
 
         }    
     }   

     async getChosenRestaurant(id: string) {
        try {
          const url = `/restaurants/${id}`,
            result = await axios.get(this.path + url, { withCredentials: true });
          assert.ok(result, Definer.general_err1);
    
          console.log("state:", result.data.data);
          const restaurant: Restaurant = result.data.data;
          return restaurant;
        } catch (err: any) {
          console.log(`ERROR ::: getChosenRestaurant ${err.message}`);
          throw err;
        }
      }

}
export default RestaurantApiService;

    