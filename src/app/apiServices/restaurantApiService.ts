import axios from "axios";
import assert from "assert";
import { Definer } from "../../lb/Definer";
import { serviceApi } from "../../lb/config";
import { Restaurant } from "../../css/types/user";


class RestaurantApiService {
    private readonly path: string;
    constructor () {
        this.path = serviceApi;
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
            console.log("result::", result);
        }catch(err: any) {
            console.log(`error::::getTopRestaurants: ${err.message}`);
            throw err;

        }    
    }


}
export default RestaurantApiService;

    