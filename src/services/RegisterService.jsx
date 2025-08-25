import axios from "../utils/AxiosInstance.jsx"
const registerUser = (email, password,confirmPwd)=>{
    if(password === confirmPwd)
    {
        const data = new FormData();
        data.append("username", email.split("@").at(0));
        data.append('email', email);
        data.append('password', password);
        data.append('social_id', email);
        console.log(">>> post request");
        if(data){
            const response = axios.post("registry", data)
            return response;
        }
    }
    return "Confirm is not corrected";
}
export { registerUser };