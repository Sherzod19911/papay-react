import { serverApi } from "../../lb/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lb/Definer";
import { Member } from "../../css/types/user";
class MemberApiService {
  private readonly path: string;

  constructor () {
    this.path = serverApi;
  };


  public async signupRequest(signup_data: any) {
    try {
      const result = await axios.post(this.path + "/signup", signup_data, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state: ", result.data.state);
      console.log( "state","success")

      const member: Member = result.data.data;
      localStorage.setItem("member_data", JSON.stringify(member));
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: loginRequest ${err.message}`);
      throw err;
    }
  }


  public async loginRequest(login_data: any) {
    try {
      const result = await axios.post(
        this.path + "/login",
        login_data,
        { withCredentials: true }
      );
  
      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== 'fail', result?.data?.message); // Checking state
      const member: Member = result.data.data;
      localStorage.setItem("member_data", JSON.stringify(member));   //member objectni jasonga uzgartirib saqlagin
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: loginRequest ${err.message}`);
      throw err;
    }
  }
       

  
 
}
 
  


export default MemberApiService;      