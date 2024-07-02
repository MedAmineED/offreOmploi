import User from "../entity/User";
import axios from "axios";



class ApiRequets {
    async addUser(endpoint: string, data: User): Promise<User> {
        try {
          const response = await axios.post<User>(endpoint, data);
          return response.data;
        } catch (error) {
           console.error("Error posting data:", error);
          throw error;
        }
      }
}


export default new ApiRequets();