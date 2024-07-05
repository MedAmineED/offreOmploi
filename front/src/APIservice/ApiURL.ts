interface ApiUrl {
    readonly REGISTER_USER  : string;
    readonly LOGIN_USER : string;

    readonly LOGIN_COMPANY : string;

    readonly ENTREPRISE : string;

    readonly OFFRE : string;
}


const httpUrl = "http://localhost:5055"


const apiUrls : ApiUrl = {
    REGISTER_USER : httpUrl + "/api/auth/register",
    LOGIN_USER : httpUrl + "/api/auth/login",
    ENTREPRISE : httpUrl + "/api/entreprise",
    LOGIN_COMPANY : httpUrl + "/api/auth/loginCompany",
    OFFRE : httpUrl + "/api/offre"
}

export default apiUrls;