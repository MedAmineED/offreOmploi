interface ApiUrl {
    readonly REGISTER_USER  : string;
    readonly LOGIN_USER : string;

    readonly ENTREPRISE : string;
}


const httpUrl = "http://localhost:5055"


const apiUrls : ApiUrl = {
    REGISTER_USER : httpUrl + "/api/auth/register",
    LOGIN_USER : httpUrl + "/api/auth/login",
    ENTREPRISE : httpUrl + "/api/entreprise"
}

export default apiUrls;