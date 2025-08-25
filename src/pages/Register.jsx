import BichCham from "../assets/bich_chamm.mp4";
import {useState} from "react";
import {registerUser} from "../services/RegisterService.jsx";

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await registerUser(email, password,confirmPwd);
        console.log(">>>> check response:",response);
    }
    return(
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col md:flex-row items-center md:justify-between justify-center lg:px-2 px-6 py-8 mx-auto h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0
                    sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700 md:ml-40">
                    {/*-----------Form Register--------------*/}
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="text-xl font-medium leading-tight tracking-tight md:text-gray-900 md:text-3xl dark:text-white">
                            Create your Account
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={(event)=>handleSubmit(event)}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required="" value={email} onChange={(event)=>setEmail(event.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required="" value={password} onChange={(event)=>setPassword(event.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="confirm-password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password"
                                       placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required="" value={confirmPwd} onChange={(event)=>setConfirmPwd(event.target.value)} />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox"
                                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                           required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I
                                        accept the <a
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                                an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#"
                                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                here</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="hidden md:block h-full">
                    <video autoPlay muted loop className="w-full h-full object-cover scale-[0.85]">
                        <source src={BichCham} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>)
}
export default Register;