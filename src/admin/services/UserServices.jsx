import axios from '../utils/AxiosInstance.jsx'
const getAllUsers = async () => {
    try{
        const response = await axios.get("public/users/get-all");
        console.log(">>> check user-service",response);
        return response;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export {getAllUsers};