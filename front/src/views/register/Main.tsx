import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import dom from "@left4code/tw-starter/dist/js/dom";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import ApiRequests from "@/ApiService/ApiRequests";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./scrollbarStyle.css";
import React from "react";
import ApiUrl from "@/ApiService/ApiURL";
import User from "../../entity/User";
import { useNavigate } from "react-router-dom";

function Main() {

  const navigate = useNavigate();

  const [role, setRole] = useState(2);

  const [user , setUser] = useState({
    firstname: "",
    lastname: "",
    age: "",
    role: "",
    numtel: "",
    niveauetude: "",
    diplome: "",
    experience: "",
    email: "",
    password: ""
  });

  const [company, setCompany] = useState({
    nom_ent: "",
    email: "",
    pwd: "",
    numtel: "",
    location: ""
  })



  useEffect(() => {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
    addUserReq();
  }, []);

  const handleSelectChangeRole = (e: ChangeEvent<HTMLSelectElement>)=> {
    setRole(parseInt(e.target.value));
  }

  const handleInputChange  = (e: ChangeEvent<HTMLInputElement>) => {
    if(role ==2) {
      const newUser = {...user, [e.target.name] : e.target.value }
      if(role == 2)
      setUser({...newUser});
    } else {
      const newCompany = {...company, [e.target.name] : e.target.value }
      setCompany({...newCompany});
    }
  }

  const addUserReq = async () => {
    try {
      if(role == 2){
        const addedUser = await ApiRequests.addedUser(ApiUrl.REGISTER_USER, user);
        console.log("user added");
      }
      else {
        const addCompany = await ApiRequests.addCompany(ApiUrl.ENTREPRISE, company);
        console.log("company added");
      }
      navigate('/login');
    } catch (error) {
      console.error("Error adding user/company:", error);
    }
  };


  return (
    <>
      <div className="min-h-screen py-2">
        <DarkModeSwitcher />
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            {/* BEGIN: Register Info */}
            <div className="hidden xl:flex flex-col min-h-screen">
              <a href="" className="-intro-x flex items-center pt-5">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-6"
                  src={logoUrl}
                />
                <span className="text-white text-lg ml-3"> Tinker </span>
              </a>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="-intro-x w-1/2 -mt-16"
                  src={illustrationUrl}
                />
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                  A few more clicks to <br/>
                  sign up to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Manage all your e-commerce accounts in one place
                </div>
              </div>
            </div>
            {/* END: Register Info */}
            {/* BEGIN: Register Form */}
            <div className="flex  xl:py-0 my-10 xl:my-0 overflow-y-auto max-h-screen custom-scrollbar">
              <div className="my-auto mx-auto xl:ml-20  bg-white dark:bg-darkmode-600 xl:bg-transparent  sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Sign Up
                </h2>
                <div className="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>
                <div className="intro-x mt-8">
                  <select 
                    onChange={(e)=> {handleSelectChangeRole(e)}}
                    value={role}
                    className="intro-x login__input form-control py-3 px-4 block">
                    <option disabled value={""}>choose option</option>
                    <option  value={2}>candidate</option>
                    <option value={3}>company</option>
                  </select>
                  {
                    role == 2? 
                      <>
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value={user.firstname}
                            name="firstname"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="First Name"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value={user.lastname}
                            name="lastname"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Last Name"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={user.age}
                            name = "age"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Age"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={user.numtel}
                            name = "numtel"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Phone number"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={user.niveauetude}
                            name = "niveauetude"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Study's level"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={user.diplome}
                            name = "diplome"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Diploma"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={user.experience}
                            name = "experience"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Experience"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={user.email}
                            name = "email"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Email"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={user.password}
                            name = "password"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Password"
                          />
                      </>
                       : 
                   <>
                         <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={company.nom_ent}
                            name = "nom_ent"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="company name"
                          />
                         <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={company.email}
                            name = "email"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Email"
                          />
                         <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={company.numtel}
                            name = "numtel"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="phone number"
                          />
                         <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={company.location}
                            name = "location"
                            type="text"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Adress"
                          />
                          <input
                            onChange={(e)=>{handleInputChange(e)}}
                            value ={company.pwd}
                            name = "pwd"
                            type="password"
                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Password"
                          />
                   </>
                  }
                  <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
                    <div className="col-span-3 h-full rounded bg-success"></div>
                    <div className="col-span-3 h-full rounded bg-success"></div>
                    <div className="col-span-3 h-full rounded bg-success"></div>
                    <div className="col-span-3 h-full rounded bg-slate-100 dark:bg-darkmode-800"></div>
                  </div>
                  <a href="" className="intro-x text-slate-500 block mt-2 text-xs sm:text-sm">
                    What is a secure password?
                  </a>
                  <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Password Confirmation"
                  />
                </div>
                <div className="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="form-check-input border mr-2"
                  />
                  <label className="cursor-pointer select-none" htmlFor="remember-me">
                    I agree to the Envato
                  </label>
                  <a className="text-primary dark:text-slate-200 ml-1" href="">
                    Privacy Policy
                  </a>
                  .
                </div>
                <div className="intro-x mb-8 mt-2 xl:mt-2 text-center xl:text-left">
                  <button 
                        onClick={()=> {addUserReq()}}
                        className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">
                    Register
                  </button>
                  <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
            {/* END: Register Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
