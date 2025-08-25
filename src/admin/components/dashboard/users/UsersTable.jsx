import {useEffect, useState} from "react";
import {getAllUsers} from "../../../services/UserServices.jsx";

const UsersTable = ()=>{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fectchUsers();
    }, []);
    const fectchUsers = async () => {
        let users = await getAllUsers();
        console.log(">>> check users:",users);
        if(users !== null){
            setUsers(users);
        }
    }
    return(
        <div>
            {users.length > 0 ?
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-200 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-600" key={user.id}>
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index+1}
                            </th>
                            <td className="px-6 py-4">
                                {user?.username}
                            </td>
                            <td className="px-6 py-4">
                                {user?.email}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end">
                                    <div
                                        className="font-medium text-green-600 dark:text-blue-500 sm:mr-5 mr-2 cursor-pointer">Details
                                    </div>
                                    <div
                                        className="font-medium text-blue-600 dark:text-blue-500 sm:mr-5 mr-2 cursor-pointer">Edit
                                    </div>
                                    <div
                                        className="font-medium text-red-600 dark:text-red-500 cursor-pointer">Delete
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>:
                // Users is not found
                <div>No users</div>}

        </div>
    )
}
export default UsersTable