import Login from "../entity/Login";
import User from "../entity/User";
import axios from "axios";



class ApiRequets {
  //----------------
  //----BEGUINN USER
  //----------------
    async addUser(endpoint: string, data: User): Promise<User> {
        try {
          const response = await axios.post<User>(endpoint, data);
          return response.data;
        } catch (error) {
           console.error("Error posting data:", error);
          throw error;
        }
      }
    
    async login(endpoint: string, data: Login): Promise<Login> {
      
        try {
          const response = await axios.post<Login>(endpoint, data);
          return response.data;
        } catch (error) {
          console.log("my URL : " + endpoint);
           console.error("Error posting data:", error);
          throw error;
        }
      }
}


export default new ApiRequets();