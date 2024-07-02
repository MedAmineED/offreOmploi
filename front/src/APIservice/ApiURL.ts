interface ApiUrl {
    readonly REGISTER_USER  : string;
}


const httpUrl = "http://localhost:5055"


const apiUrls : ApiUrl = {
    REGISTER_USER : httpUrl + "/api/auth/register"
}