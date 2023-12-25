import { serverApi } from "../../lb/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lb/Definer";
import { ProductSearchObj } from "../../css/types/others";
import { Product } from "../../css/types/product";

     

class ProductApiService {     
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObj) {
    try {
      const url = "/products",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetProducts ${err.message}`);
      throw err;
    }
  }
    
}

 export default ProductApiService;