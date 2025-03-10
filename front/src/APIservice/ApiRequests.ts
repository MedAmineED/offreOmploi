import Login from "../entity/Login";
import Offre from "../entity/Offre";
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
    //----------------
    //----END USER
    //----------------


    //---------------------
    //----BEGUIN ENTREPRISE
    //----------------------

    async addCompany(endpoint: string, data: User): Promise<User> {
      try {
        const response = await axios.post<User>(endpoint, data);
        return response.data;
      } catch (error) {
         console.error("Error posting data:", error);
        throw error;
      }
    }

    //---------------------
    //----BEGUIN ENTREPRISE
    //----------------------




    //---------------------
    //----BEGUIN ENTREPRISE
    //----------------------

    async getOfferList(endpoint: string): Promise<Offre> {
      try {
        const response = await axios.get<Offre>(endpoint);
        return response.data;
      } catch (error) {
         console.error("Error posting data:", error);
        throw error;
      }
    }

    //---------------------
    //----BEGUIN ENTREPRISE
    //----------------------
}


export default new ApiRequets();