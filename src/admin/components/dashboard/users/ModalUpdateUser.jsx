import { IoCameraOutline } from "react-icons/io5";
const ModalUpdateUser = () => {
    return (
        <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full"
        >
            {/* Overlay riêng */}
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

            {/* Modal content */}
            <div className="relative p-4 w-full max-w-6xl max-h-full z-10">
                <div className="bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600">
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder="Enter full name"
                                className="text-xl font-semibold text-gray-900 dark:text-white bg-transparent
               border-b border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <span className="block text-xs text-gray-500 md:mt-1">Created: 20/8/2003</span>
                        </div>

                        <div
                            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </div>
                    </div>
                    <div className="p-4 md:p-5">
                        {/* Form nội dung */}
                        <form className="mx-auto">
                            <div className="grid md:grid-cols-2 md:gap-3">
                                <div className="z-0 w-full mb-5 group relative">
                                    <div className="w-64 mx-auto md:mt-4">
                                        <label htmlFor="imageInput" className="block">
                                            <div
                                                id="previewBox"
                                                className="w-full h-40 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:border-blue-500 hover:bg-blue-50 overflow-hidden"
                                            >
                                                <span className="text-gray-400"><IoCameraOutline size="100px"/></span>
                                            </div>
                                        </label>
                                        <input id="imageInput" type="file" accept="image/*" className="hidden"/>
                                    </div>
                                </div>
                                <div className="grid md:grid-flow-row z-0 w-full mb-5 group md:gap-5">
                                    <div className="relative">
                                        <input type="text" name="social_id"
                                               id="social_id"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="social_id"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Social
                                            id
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="email" name="email"
                                               id="email"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="email"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="text" name="username"
                                               id="username"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="username"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User
                                            name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="password" name="password"
                                               id="password"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="password"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="date" name="birthdate"
                                               id="birthdate"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="birthdate"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birthday
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row-reverse">
                                <div
                                    className="md:w-40 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <span className="text-md">Update</span>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalUpdateUser;
